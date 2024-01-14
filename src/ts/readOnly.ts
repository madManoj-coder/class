// const cl = console.log;

// // class:- it is a blueprint of instance/object
// // it is synatatical sugar coating over constructor function.
// // public, private, protected, readonly, static

// // 1} public:- public property/method will be available in same class, will be available
// // on there derived class(child) and also available on there instances

// // 2} private:- private property/method will be available in same class will not be available
// // on there derived class(child) and also not available on there instances

// // 3} Read only access modifier:- A member whose value can not be changed
// // once get initialize(not in same class, child class or instances)

// class Department {
//     // public dname: string;
//     // public dId: string;
//     private employess: Array<string> = []
//     constructor(public dname: string, private readonly dId: string) {
//         // this.dname = dname,
//         // this.dId = dId
//     }

//     public discribe() {
//         cl(`this is department ${this.dname} with id ${this.dId}`)
//         // this.dId = "any"
//     }

//     hire(emp: string) {
//        this.employess.push(emp)
//     }
// }

// let finan = new Department("manoj", "manoj@123")


// finan.hire("manoj")
// cl(finan)

// finan.discribe()

// // finan.employees.push("aaa")
// // cl(finan)

