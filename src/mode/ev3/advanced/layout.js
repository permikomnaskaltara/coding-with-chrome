/**
 * @fileoverview Layout for the EV3 modification.
 *
 * @license Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */
goog.provide('cwc.mode.ev3.advanced.Layout');

goog.require('cwc.soy.mode.ev3.advanced');



/**
 * @constructor
 * @param {!cwc.utils.Helper} helper
 */
cwc.mode.ev3.advanced.Layout = function(helper) {
  /** @type {!cwc.utils.Helper} */
  this.helper = helper;
};


/**
 * Decorates the EV3 layout.
 */
cwc.mode.ev3.advanced.Layout.prototype.decorate = function() {
  var layoutInstance = this.helper.getInstance('layout', true);
  layoutInstance.decorateTwoColumnLayout();
  layoutInstance.setFixRightComponentSize(400);
  layoutInstance.setFixBottomComponentSize(105);
  layoutInstance.setHandleSize(1);

  var nodes = layoutInstance.getNodes();
  console.log('Adding Content');

  goog.soy.renderElement(
      nodes['content-left'],
      cwc.soy.mode.ev3.advanced.editor,
      {'prefix': this.helper.getPrefix('ev3-editor')}
  );

  goog.soy.renderElement(
      nodes['content-right'],
      cwc.soy.mode.ev3.advanced.runner,
      {'prefix': this.helper.getPrefix('ev3-runner')}
  );

  goog.soy.renderElement(
      nodes['content-bottom'],
      cwc.soy.mode.ev3.advanced.monitor,
      {'prefix': this.helper.getPrefix('ev3-monitor')}
  );

};
