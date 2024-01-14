// const cl = console.log;

// class Department {
//     private employess: Array<string> = []
//     constructor(public dname: string, private readonly dId: string) {
//     }

//     public discribe() {
//         cl(`this is department ${this.dname} with id ${this.dId}`)
//     }

//     hire(emp: string) {
//         this.employess.push(emp)
//     }
// }

// let finan = new Department("manoj", "manoj@123")
// finan.hire("manoj")
// finan.discribe()
// cl(finan)


// class FinanceDepartment extends Department {
//     private reportsArr: Array<string>;
//     constructor() {
//         super("FD", "D-123")
//         this.reportsArr = []
//     }

//     addReports(report: string) {
//         this.reportsArr.push(report)
//     }
// }

// let finance = new FinanceDepartment()
// finance.addReports("Dec 2023 Salary_slip")
// cl(finance)


// class ITDepartment extends Department {
//     private admins : Array<string> = []
//     constructor(dname: string, dId: string) {
//         super(dname, dId)
//     }

//     addAdmins(admin:string){
//         this.admins.push(admin)
//     }
// }

// let it = new ITDepartment("IT", "D-234")
// it.addAdmins("Jhon Doe")
// it.discribe()
// it.hire("Manoj waghmare")
// cl(it)