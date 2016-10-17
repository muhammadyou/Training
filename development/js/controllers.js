angular.module("MyControllers", [])


    .controller("NFVProgramCtrl", function($state, SessionStorage) {

        //--------------------------------Learning path tabs ------------------------//

        this.learningPathTabs = [
            {title: "Telco Cloud and Automation", state: "main.nfvProgram.TelcoAutoLearningPth"},
            {title: "VNF Owners", state: "main.nfvProgram.VNFOwnLearningPth"},
            {title: "Cloud for Everyone & Management", state: "main.nfvProgram.EveryoneLearningPth"}
        ]


        this.recordvalue = function(index){  // when a click takes place , store the seleccted tab index in the session
            if(this.selectedtab > -1 && this.selectedtab < 3){   // just to make sure not to store some stpid value .NOTE: if you are increasing the tab, then this range needs to be changed
                SessionStorage.set("SelectedTab", this.selectedtab)
            }

        }

        if(SessionStorage.get("SelectedTab") == null){   // upon page refresh, check if selected tab index is stored in session
            this.selectedtab = 0;       // so when visiting the page first time, there wont be any value, so set it to zero to show the first tab selected
        }
        else{
            this.selectedtab = SessionStorage.get("SelectedTab");   // if the selected tab index is stored in session then assign it to variable to expose it to view
        }


        //----------------------------------------Section Dropdown------------------------//
        this.selectedSectIndex = null;
        this.sections = [
            {section: "Emerging Technologies", link:"main.nfvProgram.TelcoAutoLearningPth",  category:"Telco Cloud and Automation", details: 'You are assigned to Telco Cloud and Automation learning path. Please "click" on it to follow the steps'},
            {section: "Network Automation", link:"main.nfvProgram.TelcoAutoLearningPth", category:"Telco Cloud and Automation", details: 'You are assigned to Telco Cloud and Automation learning path. Please "click" on it and follow the steps'},
            {section: "Broadband Services", link:"main.nfvProgram.VNFOwnLearningPth", category:"VNF Owners", details: 'You are assigned to VNF Owners learning path. Please "click" on it to follow the steps'},
            {section: "Fixed and Mobile Core Planning", link:"main.nfvProgram.VNFOwnLearningPth", category:"VNF Owners", details: 'You are assigned to VNF Owners learning path. Please "click" on it to follow the steps'},
            {section: "Network Analysis and Business Planning", link:"main.nfvProgram.VNFOwnLearningPth", category:"VNF Owners", details: 'You are assigned to VNF Owners learning path. Please "click" on it to follow the steps'},
            {section: "Service Quality Management", link:"main.nfvProgram.EveryoneLearningPth", category:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management learning path. Please "click" on it to follow the steps'},
            {section: "ND Projects", link:"main.nfvProgram.EveryoneLearningPth", category:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management learning path. Please "click" on it to follow the steps'},
            {section: "Business Development & Delivery Management", link:"main.nfvProgram.EveryoneLearningPth", category:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management learning path. Please "click" on it to follow the steps'},
            {section: "Network Infrastructure Development", link:"main.nfvProgram.EveryoneLearningPth", category:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management learning path. Please "click" on it to follow the steps'}
        ]

        this.setClassforSection = function(index){   // set the learning path in view for the selected section and put it in session
            this.selectedSectIndex = index;
            SessionStorage.set("selectedSection", this.sections[this.selectedSectIndex].category)
            this.currentSelectedSection = SessionStorage.get("selectedSection");
            if(this.sections[this.selectedSectIndex].category == "Telco Cloud and Automation")    // update the tab bottom border
                this.selectedtab = 0;
            else if(this.sections[this.selectedSectIndex].category == "VNF Owners")
                this.selectedtab = 1;
            else if(this.sections[this.selectedSectIndex].category == "Cloud for Everyone & Management")
                this.selectedtab = 2;
            $state.go(this.sections[this.selectedSectIndex].link)  // go to the learning path

        }
        this.currentSelectedSection = SessionStorage.get("selectedSection");

        this.gotoCourse= function(Class, area, tabView){  // open the course out of the learning step
            SessionStorage.set("selectedArea", area)  // send the area name to "service" to make it accessible by another view and ctrl
            SessionStorage.set("Class", Class)
            $state.go(tabView);
        }





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


