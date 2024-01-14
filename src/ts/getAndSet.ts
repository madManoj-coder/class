const cl = console.log;

class Department {
    private employess: Array<string> = []
    constructor(public dname: string, private readonly dId: string) {
    }

    public discribe() {
        cl(`this is department ${this.dname} with id ${this.dId}`)
    }

    hire(emp: string) {
        this.employess.push(emp)
    }
}

let finan = new Department("manoj", "manoj@123")
finan.hire("manoj")
finan.discribe()
cl(finan)


class FinanceDepartment extends Department {
    private reportsArr: Array<string> = ["Oct salry", "Nov salry", "Dec salry"];
    private lastReports !: string;
    constructor() {
        super("FD", "D-123")
        this.lastReports = this.reportsArr[this.reportsArr.length - 1]
    }

    addReports(report: string) {
        this.reportsArr.push(report)
    }

    get accessLastReport(): string {
        return this.lastReports
    }

    set updateLastReport(report: string) {
        this.lastReports = report;
        this.reportsArr[this.reportsArr.length - 1] = report;
    }

//     accessLastReport() : string{
//         return this.lastReports
//     }

//     updateLastReport(report : string){
//         this.lastReports = report;
//     }
}

let finance = new FinanceDepartment()
// finance.addReports("Dec 2023 Salary_slip")
finance.accessLastReport
finance.updateLastReport = "Dec 2023 Salary_slip";
cl(finance)

