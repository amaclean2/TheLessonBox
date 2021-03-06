# -*- coding: utf-8 -*- #
# Copyright 2014 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Command for deleting forwarding rules."""

from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from googlecloudsdk.api_lib.compute import base_classes
from googlecloudsdk.api_lib.compute import utils
from googlecloudsdk.calliope import base
from googlecloudsdk.command_lib.compute import flags as compute_flags
from googlecloudsdk.command_lib.compute.forwarding_rules import flags


class Delete(base.DeleteCommand):
  """Delete forwarding rules.

  *{command}* deletes one or more Google Compute Engine forwarding rules.
  """

  FORWARDING_RULES_ARG = None

  @classmethod
  def Args(cls, parser):
    cls.FORWARDING_RULES_ARG = flags.ForwardingRuleArgumentPlural()
    cls.FORWARDING_RULES_ARG.AddArgument(parser, operation_type='delete')
    parser.display_info.AddCacheUpdater(flags.ForwardingRulesCompleter)

  def Run(self, args):
    """Issues requests necessary to delete Forwarding Rules."""
    holder = base_classes.ComputeApiHolder(self.ReleaseTrack())
    client = holder.client

    forwarding_rule_refs = self.FORWARDING_RULES_ARG.ResolveAsResource(
        args,
        holder.resources,
        scope_lister=compute_flags.GetDefaultScopeLister(client))

    utils.PromptForDeletion(forwarding_rule_refs)

    requests = []
    for forwarding_rule_ref in forwarding_rule_refs:
      if forwarding_rule_ref.Collection() == 'compute.globalForwardingRules':
        request = client.messages.ComputeGlobalForwardingRulesDeleteRequest(
            forwardingRule=forwarding_rule_ref.Name(),
            project=forwarding_rule_ref.project)
        requests.append((client.apitools_client.globalForwardingRules, 'Delete',
                         request))
      else:
        request = client.messages.ComputeForwardingRulesDeleteRequest(
            forwardingRule=forwarding_rule_ref.Name(),
            project=forwarding_rule_ref.project,
            region=forwarding_rule_ref.region)
        requests.append((client.apitools_client.forwardingRules, 'Delete',
                         request))

    return client.MakeRequests(requests)
