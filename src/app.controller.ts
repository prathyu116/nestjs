
import { Controller, Delete, Get, Param, Post, Put, Body, HttpCode } from "@nestjs/common";//decorator
import { data, ReportType } from "src/data";
import { v4 as uuid } from "uuid"
import { AppService } from "./app.service";
@Controller('/report/:type')
//ignea koduthal ee class nu controller nte ability kittum
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  @Get()
  getAllIncomeReports(@Param('type') type: string) {
    const reportType = type === `income` ? ReportType.INCOME : ReportType.EXPENSE

    return this.appService.getAllReports(reportType)
  }

  @Get(':id')
  getIncomeReportById(
    @Param('type') type: string,
    @Param('id') id: string
  ) {
    const reportType = type === `income` ? ReportType.INCOME : ReportType.EXPENSE

    return data.report.filter(r => r.type === reportType).find(r => r.id === id)
  }

  @Post()
  createIncomeReport(
    @Body() body: {
      amount: number,
      source: string
    },
    @Param('type') type: string,

  ) {
    const newReport = {
      id: uuid(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === `income` ? ReportType.INCOME : ReportType.EXPENSE

    }
    data.report.push(newReport)
    console.log(body);
    return newReport
  }

  @Put(':id')
  updateIncomeReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() body: {
      amount: number,
      source: string
    }
  ) {
    const reportType = type === `income` ? ReportType.INCOME : ReportType.EXPENSE

    const reportToUpdate = data.report.filter(r => r.type === reportType).find(r => r.id === id)
    if (!reportToUpdate) return
    const reportIndex = data.report.findIndex(r => r.id === reportToUpdate.id)
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body
    }
    return data.report[reportIndex]
  }
  @HttpCode(204)
  @Delete(':id')
  deleteIncomeReport(@Param('id') id: string) {

    const reportIndex = data.report.findIndex(r => r.id === id)
    if (reportIndex === -1) return "null"
    data.report.splice(reportIndex, 1)
    return "created"
  }
}


//http://localhost:3000/ +controller decorator + method Decarator