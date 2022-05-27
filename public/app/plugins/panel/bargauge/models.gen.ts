//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This file was autogenerated by cuetsy. DO NOT EDIT!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import * as ui from '@grafana/schema';

export const modelVersion = Object.freeze([0, 0]);


export interface PanelOptions extends ui.SingleStatBaseOptions {
  displayMode: ui.BarGaugeDisplayMode;
  minVizHeight: number;
  minVizWidth: number;
  showUnfilled: boolean;
}

export const defaultPanelOptions: Partial<PanelOptions> = {
  displayMode: ui.BarGaugeDisplayMode.Gradient,
  minVizHeight: 10,
  minVizWidth: 0,
  showUnfilled: true,
};