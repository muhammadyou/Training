angular.module("MyControllers", [])


    .controller("NFVProgramCtrl", function($state, SessionStorage, LearningPaths, SectionsInDropdown) {

        //--------------------------------Learning path tabs ------------------------//

        this.learningPathTabs = LearningPaths.get();  // get the tabs text

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
        this.sections = SectionsInDropdown.get();

        this.setLrningPthforSection = function(index){   // set the learning path in view for the selected section and put it in session
            this.selectedSectIndex = index;
            SessionStorage.set("selectedLearningPath", this.sections[this.selectedSectIndex].learningPath)  //storing the learning path
            this.currentSelectedSection = SessionStorage.get("selectedLearningPath");


            if(this.sections[this.selectedSectIndex].learningPath == "Telco Cloud and Automation")    // update the tab bottom border
                this.selectedtab = 0;
            else if(this.sections[this.selectedSectIndex].learningPath == "VNF Owners")
                this.selectedtab = 1;
            else if(this.sections[this.selectedSectIndex].learningPath == "Cloud for Everyone & Management")
                this.selectedtab = 2;
            $state.go(this.sections[this.selectedSectIndex].link)  // go to the learning path

        }
        this.currentSelectedSection = SessionStorage.get("selectedLearningPath");

        this.gotoCourse= function(learningPath, area, tabView){  // open the course out of the learning step
            SessionStorage.set("selectedArea", area)  // send the area name to "service" to make it accessible by another view and ctrl
            SessionStorage.set("LearningPath", learningPath)
            $state.go(tabView);
        }

    })

    .controller("NFVCoursesCtrl", function(SessionStorage, TelcoAutoCourses) {

        var areaname =  SessionStorage.get("selectedArea"); // get the name of area clicked by the user to get the relevant sections and vids
        var learningPath =  SessionStorage.get("LearningPath"); // get the name of area clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // removes ET from the name, converts to string adding commmas, then replace commmas with space

        var AlltelcoAutoCourses = TelcoAutoCourses.get();  // get the section and courses
        this.currentClickedArea = AlltelcoAutoCourses[learningPath][areaname];

    })

    .controller("VNFOwnCoursesCtrl", function(SessionStorage, VNFOwnCourses) {

        var areaname =  SessionStorage.get("selectedArea"); // get the name of area clicked by the user to get the relevant sections and vids
        var learningPath =  SessionStorage.get("LearningPath"); // get the name of area clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // removes ET from the name, converts to string adding commmas, then replace commmas with space

        var AllVNFOwnCourses = VNFOwnCourses.get();  // get the section and courses
        this.currentClickedArea = AllVNFOwnCourses[learningPath][areaname];
    })


    .controller("CloudEveryoneCtrl", function(SessionStorage, CloudEveryoneCourses) {

        var areaname =  SessionStorage.get("selectedArea"); // get the name of area clicked by the user to get the relevant sections and vids
        var learningPath =  SessionStorage.get("LearningPath"); // get the name of area clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // removes ET from the name, converts to string adding commmas, then replace commmas with space

        var AllVNFOwnCourses = CloudEveryoneCourses.get();  // get the section and courses
        this.currentClickedArea = AllVNFOwnCourses[learningPath][areaname];
    })


