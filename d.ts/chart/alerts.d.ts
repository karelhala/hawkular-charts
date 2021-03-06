/// <reference path="../../vendor/vendor.d.ts" />
declare namespace Charts {
    /**
     * Defines an individual alert bounds  to be visually highlighted in a chart
     * that an alert was above/below a threshold.
     */
    class AlertBound {
        startTimestamp: TimeInMillis;
        endTimestamp: TimeInMillis;
        alertValue: number;
        startDate: Date;
        endDate: Date;
        constructor(startTimestamp: TimeInMillis, endTimestamp: TimeInMillis, alertValue: number);
    }
    function createAlertLine(svg: any, timeScale: any, yScale: any, chartData: IChartDataPoint[], alertValue: number): void;
    function extractAlertRanges(chartData: IChartDataPoint[], threshold: AlertThreshold): AlertBound[];
    function createAlertBoundsArea(svg: any, timeScale: any, yScale: any, highBound: number, alertBounds: AlertBound[]): void;
}
