angular.module("MyControllers", [])

    .controller("MainCtrl", function($state, SessionStorage) {


    })

    .controller("NFVProgramCtrl", function($state, SessionStorage) {


        this.gotoCourse= function(Class, area, tabView){
            SessionStorage.set("selectedArea", area)  // send the area name to service to make it accessible by another view and ctrl
            SessionStorage.set("Class", Class)
            $state.go(tabView);
        }


        this.selectedSectIndex = null;
        this.sections = [
            {section: "Emerging Technologies",  category:"Telco Cloud and Automation", details: 'You are assigned to Telco Cloud and Automation class. Please "click" on it and follow the learning steps provided for your class'},
            {section: "Network Automation",  category:"Telco Cloud and Automation", details: 'You are assigned to Telco Cloud and Automation class. Please "click" on it and follow the learning steps provided for your class'},
            {section: "Broadband Services",  category:"VNF Owners", details: 'You are assigned to VNF Owners class. Please "click" on it and follow the learning steps provided for your class'},
            {section: "Fixed and Mobile Core Planning",  category:"VNF Owners", details: 'You are assigned to VNF Owners class. Please "click" on it and follow the learning steps provided for your class'},
            {section: "Network Analysis and Business Planning",  category:"VNF Owners", details: 'You are assigned to VNF Owners class. Please "click" on it and follow the learning steps provided for your class'},
            {section: "Service Quality Management",  category:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management class. Please "click" on it and follow the learning steps provided for your class'},
            {section: "ND Projects",  category:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management class. Please "click" on it and follow the learning steps provided for your class'},
            {section: "Business Development & Delivery Management",  category:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management class. Please "click" on it and follow the learning steps provided for your class'},
            {section: "Network Infrastructure Development",  category:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management class. Please "click" on it and follow the learning steps provided for your class'}
        ]

        this.setClassforSection = function(index){
            this.selectedSectIndex = index;
            SessionStorage.set("selectedSection", this.sections[this.selectedSectIndex].category)
            this.currentSelectedSection = SessionStorage.get("selectedSection");
        }
        this.currentSelectedSection = SessionStorage.get("selectedSection");




    })

    .controller("NFVCoursesCtrl", function(SessionStorage, TelcoAutoCourses) {

        var areaname =  SessionStorage.get("selectedArea"); // get the name of area clicked by the user to get the relevant sections and vids
        var Class =  SessionStorage.get("Class"); // get the name of area clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // removes ET from the name, converts to string adding commmas, then replace commmas with space

        var AlltelcoAutoCourses = TelcoAutoCourses.get();  // get the section and courses
        console.log(JSON.stringify(AlltelcoAutoCourses))
        console.log("Class " + Class)
        console.log("Area name " + areaname)
        this.currentClickedArea = AlltelcoAutoCourses[Class][areaname];
        console.log(this.currentClickedArea)

    })

    .controller("VNFOwnCoursesCtrl", function(SessionStorage, VNFOwnCourses) {

        var areaname =  SessionStorage.get("selectedArea"); // get the name of area clicked by the user to get the relevant sections and vids
        var Class =  SessionStorage.get("Class"); // get the name of area clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // removes ET from the name, converts to string adding commmas, then replace commmas with space

        var AllVNFOwnCourses = VNFOwnCourses.get();  // get the section and courses
        this.currentClickedArea = AllVNFOwnCourses[Class][areaname];
    })


    .controller("CloudEveryoneCtrl", function(SessionStorage, CloudEveryoneCourses) {

        var areaname =  SessionStorage.get("selectedArea"); // get the name of area clicked by the user to get the relevant sections and vids
        var Class =  SessionStorage.get("Class"); // get the name of area clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // removes ET from the name, converts to string adding commmas, then replace commmas with space

        var AllVNFOwnCourses = CloudEveryoneCourses.get();  // get the section and courses
        this.currentClickedArea = AllVNFOwnCourses[Class][areaname];
    })


