angular.module("MyControllers", [])


    .controller("NFVProgramCtrl", function($state, SessionStorage, LearningPaths, SectionsInDropdown) {

        //--------------------------------Learning path tabs ------------------------//

        this.learningPathTabs = LearningPaths.get();  // get the tabs text

        if(SessionStorage.get("SelectedTab") == null){   // upon page refresh, check if selected tab index is stored in session
            this.selectedtab = 0;       // so when visiting the page first time, there wont be any value, so set it to zero to show the first tab selected
        }
        else{
            this.selectedtab = SessionStorage.get("SelectedTab");   // if the selected tab index is stored in session then assign it to variable to expose it to view
        }


        this.recordvalue = function(index){  // when a click takes place , store the seleccted tab index in the session

            if(this.selectedtab > -1 && this.selectedtab < 3){   // just to make sure not to store some stpid value .NOTE: if you are increasing the tab, then this range needs to be changed
                SessionStorage.set("SelectedTab", this.selectedtab)
            }

        }



        //----------------------------------------Section Dropdown------------------------//
        this.selectedSectIndex = null;
        this.sections = SectionsInDropdown.get();

        this.setLrningPthforSection = function(index){   // set the learning path based on view in view for the selected section and put it in session
            this.selectedSectIndex = index;
            SessionStorage.set("selectedLearningPath", this.sections[this.selectedSectIndex].learningPath)  //storing the learning path for background color
            this.currentSelectedSection = SessionStorage.get("selectedLearningPath");


            if(this.sections[this.selectedSectIndex].learningPath == "Telco Cloud & Automation") {    // update the tab bottom border
                this.selectedtab = 0;
                SessionStorage.set("SelectedTab", this.selectedtab)  // update the value for bottom border stored in session earlier in NFVProgram Ctrl which is based on tab click and this is based on dropdown click
            }
            else if(this.sections[this.selectedSectIndex].learningPath == "VNF Owners"){
                this.selectedtab = 1;
                SessionStorage.set("SelectedTab", this.selectedtab);
            }
            else if(this.sections[this.selectedSectIndex].learningPath == "Cloud for Everyone & Management"){
                this.selectedtab = 2;
                SessionStorage.set("SelectedTab", this.selectedtab)

            }
            $state.go(this.sections[this.selectedSectIndex].link)  // go to the learning path

        }
        this.currentSelectedSection = SessionStorage.get("selectedLearningPath");

        this.gotoCourse= function(learningPath, area, tabView){  // open the course out of the learning step
            SessionStorage.set("selectedArea", area)  // send the area name to "service" to make it accessible by another view and ctrl
            SessionStorage.set("LearningPath", learningPath)
            $state.go(tabView);
        }

    })

    .controller("TelcoCoursesCtrl", function(SessionStorage, TelcoAutoCourses) {

        this.learningStepsState = "main.nfvProgram.TelcoAutoLearningPth";
        var areaname =  SessionStorage.get("selectedArea"); // get the name of area (learning step) clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // the selected area (learning step) has code word in the json data so it removes ET from the name, converts to string adding commmas, then replace commmas with space and is used as heading on courses view

        var learningPath =  SessionStorage.get("LearningPath"); // an unnecessary overhead, would require if all the learningpaths data was in the same object which is not the case,  get the relevant sections and vids

        var AlltelcoAutoCourses = TelcoAutoCourses.get();  // get the section and courses
        this.currentClickedArea = AlltelcoAutoCourses[learningPath][areaname];  // learning path like TelcoAuto and areaname like CloudETDevOpsET

    })

    .controller("VNFOwnCoursesCtrl", function(SessionStorage, VNFOwnCourses) {

        this.learningStepsState = "main.nfvProgram.VNFOwnLearningPth";
        var areaname =  SessionStorage.get("selectedArea"); // get the name of area (learning step) clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // the selected area (learning step) has code word in the json data so it removes ET from the name, converts to string adding commmas, then replace commmas with space and is used as heading on courses view

        var learningPath =  SessionStorage.get("LearningPath"); // an unnecessary overhead, would require if all the learningpaths data was in the same object which is not the case,  get the relevant sections and vids

        var AlltelcoAutoCourses = VNFOwnCourses.get();  // get the section and courses
        this.currentClickedArea = AlltelcoAutoCourses[learningPath][areaname];  // learning path like TelcoAuto and areaname like CloudETDevOpsET

    })


    .controller("CloudEveryoneCtrl", function(SessionStorage, CloudEveryoneCourses) {

        this.learningStepsState = "main.nfvProgram.EveryoneLearningPth";
        var areaname =  SessionStorage.get("selectedArea"); // get the name of area (learning step) clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // the selected area (learning step) has code word in the json data so it removes ET from the name, converts to string adding commmas, then replace commmas with space and is used as heading on courses view

        var learningPath =  SessionStorage.get("LearningPath"); // an unnecessary overhead, would require if all the learningpaths data was in the same object which is not the case,  get the relevant sections and vids

        var AlltelcoAutoCourses = CloudEveryoneCourses.get();  // get the section and courses
        this.currentClickedArea = AlltelcoAutoCourses[learningPath][areaname];  // learning path like TelcoAuto and areaname like CloudETDevOpsET

    })


