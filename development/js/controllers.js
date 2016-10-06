angular.module("MyControllers", [])

    .controller("MainCtrl", function($state, NFVCourseClickState) {


        this.gotoCourse= function(category, area, tabView){
            NFVCourseClickState.set("selectedArea", area)  // send the area name to service to make it accessible by another view and ctrl
            NFVCourseClickState.set("category", category)
            $state.go(tabView);
        }

    })

    .controller("NFVCoursesCtrl", function(NFVCourseClickState, TelcoAutoCourses) {

        var areaname =  NFVCourseClickState.get("selectedArea"); // get the name of area clicked by the user to get the relevant sections and vids
        var category =  NFVCourseClickState.get("category"); // get the name of area clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // removes ET from the name, converts to string adding commmas, then replace commmas with space

        var AlltelcoAutoCourses = TelcoAutoCourses.get();  // get the section and courses
        console.log(JSON.stringify(AlltelcoAutoCourses))
        console.log("Category " + category)
        console.log("Area name " + areaname)
        this.currentClickedArea = AlltelcoAutoCourses[category][areaname];
        console.log(this.currentClickedArea)

    })

    .controller("VNFOwnCoursesCtrl", function(NFVCourseClickState, VNFOwnCourses) {

        var areaname =  NFVCourseClickState.get("selectedArea"); // get the name of area clicked by the user to get the relevant sections and vids
        var category =  NFVCourseClickState.get("category"); // get the name of area clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // removes ET from the name, converts to string adding commmas, then replace commmas with space

        var AllVNFOwnCourses = VNFOwnCourses.get();  // get the section and courses
        this.currentClickedArea = AllVNFOwnCourses[category][areaname];
    })


    .controller("CloudEveryoneCtrl", function(NFVCourseClickState, CloudEveryoneCourses) {

        var areaname =  NFVCourseClickState.get("selectedArea"); // get the name of area clicked by the user to get the relevant sections and vids
        var category =  NFVCourseClickState.get("category"); // get the name of area clicked by the user to get the relevant sections and vids
        this.coursesCollectionName = areaname.split("ET").toString().replace(/,/g, " "); // removes ET from the name, converts to string adding commmas, then replace commmas with space

        var AllVNFOwnCourses = CloudEveryoneCourses.get();  // get the section and courses
        this.currentClickedArea = AllVNFOwnCourses[category][areaname];
    })


