import { Injectable } from "@nestjs/common";
import { ReportType,data } from "./data";

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    return data.report.filter(r => r.type === type)

  }
}
 