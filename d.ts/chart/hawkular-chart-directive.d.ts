/// <reference path="../../vendor/vendor.d.ts" />
declare namespace Charts {
    type AlertThreshold = number;
    type TimeInMillis = number;
    type UrlType = number;
    type MetricId = string;
    type MetricValue = number;
    interface IMetricsResponseDataPoint {
        start: TimeInMillis;
        end: TimeInMillis;
        value?: MetricValue;
        avg?: MetricValue;
        min?: MetricValue;
        max?: MetricValue;
        median?: MetricValue;
        percentile95th?: MetricValue;
        empty: boolean;
    }
    interface IBaseChartDataPoint {
        timestamp: TimeInMillis;
        start?: TimeInMillis;
        end?: TimeInMillis;
        value?: MetricValue;
        avg: MetricValue;
        empty: boolean;
    }
    interface IChartDataPoint extends IBaseChartDataPoint {
        date?: Date;
        min: MetricValue;
        max: MetricValue;
        percentile95th: MetricValue;
        median: MetricValue;
    }
    interface IMultiDataPoint {
        key: string;
        color?: string;
        values: IChartDataPoint[];
    }
}
