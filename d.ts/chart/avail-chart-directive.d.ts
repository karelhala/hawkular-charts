/// <reference path="../../vendor/vendor.d.ts" />
declare module Charts {
    /**
     * This is the input data format.
     */
    interface IAvailDataPoint {
        timestamp: number;
        value: string;
    }
    /**
     * This is the transformed output data format. Formatted to work with availability chart (basically a DTO).
     */
    interface ITransformedAvailDataPoint {
        start: number;
        end: number;
      startDate: Date;
      endDate: Date;
        value: string;
        duration?: string;
        message?: string;
    }
    class TransformedAvailDataPoint implements ITransformedAvailDataPoint {
        start: number;
        end: number;
        value: string;
        duration: string;
        message: string;
      startDate:Date;
      endDate:Date;
        constructor(start: number, end: number, value: string, duration?: string, message?: string);
    }
    class AvailabilityChartDirective {
        restrict: string;
        replace: boolean;
        scope: {
            data: string;
            chartHeight: string;
            timeLabel: string;
            dateLabel: string;
            noDataLabel: string;
            chartTitle: string;
        };
        controller: (string | (($scope: any, $element: any, $attrs: any) => void))[];
        link: (scope: any, element: any, attrs: any) => void;
    }
}
