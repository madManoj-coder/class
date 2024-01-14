"use strict";
const cl = console.log;
class Department {
    constructor(dname, dId) {
        this.dname = dname;
        this.dId = dId;
        this.employess = [];
    }
    discribe() {
        cl(`this is department ${this.dname} with id ${this.dId}`);
    }
    hire(emp) {
        this.employess.push(emp);
    }
}
let finan = new Department("manoj", "manoj@123");
finan.hire("manoj");
finan.discribe();
cl(finan);
class FinanceDepartment extends Department {
    constructor() {
        super("FD", "D-123");
        this.reportsArr = ["Oct salry", "Nov salry", "Dec salry"];
        this.lastReports = this.reportsArr[this.reportsArr.length - 1];
    }
    addReports(report) {
        this.reportsArr.push(report);
    }
    get accessLastReport() {
        return this.lastReports;
    }
    set updateLastReport(report) {
        this.lastReports = report;
        this.reportsArr[this.reportsArr.length - 1] = report;
    }
}
let finance = new FinanceDepartment();
finance.accessLastReport;
finance.updateLastReport = "Dec 2023 Salary_slip";
cl(finance);
//# sourceMappingURL=getAndSet.js.map