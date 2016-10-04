angular.module("MyControllers", [])

    .controller("MainCtrl", function($state, NFVTelcoCourses) {


        this.gotoCourse= function(area){
            NFVTelcoCourses.setName(area)  // send the area name to service to make it accessible by another view and ctrl
        }



    })

    .controller("NFVTelcoCtrl", function(NFVTelcoCourses) {

        this.areaname =  NFVTelcoCourses.getName(); // get the name of area clicked by the user to get the relevant sections and vids



        this.nfvTelcoAutoCourses = {
            introLinAcad: [
                {
                    Coursetitle: "Introduction to Linux Academy",
                    sections: [
                        {
                            title: "All",
                            videos: [
                                {title: "All"}
                            ]
                        }
                    ]
                }

            ],

            cloudDev: [
                {
                    Coursetitle: "DevOps Essentials",
                    sections: [
                        {
                            title: "All Sections and Videos",
                            videos: [
                                {title: "All"}
                            ]
                        }

                    ]
                },

                {
                    Coursetitle: "CompTIA Cloud Essentials Certifications",
                    sections: [
                        {
                            title: "Characteristics of cloud services from a business perspective",
                            videos: [
                                {title: "All"}
                            ]
                        },
                        {
                            title: "Technical perspectives/cloud types",
                            videos: [
                                {title: "All"}
                            ]
                        },
                        {
                            title: "Steps to successful adoption of cloud computing",
                            videos: [
                                {title: "All"}
                            ]
                        },
                        {
                            title: "Understanding the impact and changes of cloud computing on IT service management in a typical organization",
                            videos: [
                                {title: "All"}
                            ]
                        }
                    ]
                },

                {
                    Coursetitle: "Microsoft Azure Essentials",
                    sections: [
                        {
                            title: "Introduction to Azure",
                            videos: [
                                {title: "All"}
                            ]
                        }
                    ]
                },

                {
                    Coursetitle: "AWS Certified Solutions Architect - Associate Level",
                    sections: [
                        {
                            title: "AWS Concepts",
                            videos: [
                                {title: "All"}
                            ]
                        }
                    ]
                }
            ],

            linux: [
                {
                    Coursetitle: "Linux Essentials Certification",
                    sections: [
                        {
                            title: "All",
                            videos: [
                                {title: "All"}
                            ]
                        }

                    ]
                }
            ],

            openstack: [
                {
                    Coursetitle: "Openstack Essentials",
                    sections: [
                        {
                            title: "All",
                            videos: [
                                {title: "All"}
                            ]
                        }

                    ]
                },

                {
                    Coursetitle: "Openstack Foundation Certified Openstack Administrator",
                    sections: [
                        {
                            title: "All",
                            videos: [
                                {title: "All"}
                            ]
                        }

                    ]
                }

            ],


            script: [
                {
                    Coursetitle: "Introduction to Python to Linux",
                    sections: [
                        {
                            title: "All",
                            videos: [
                                {title: "All"}
                            ]
                        }

                    ]
                },

                {
                    Coursetitle: "The System Administrator's Guide to Bash Scripting",
                    sections: [
                        {
                            title: "All",
                            videos: [
                                {title: "All"}
                            ]
                        }

                    ]
                }

            ],

            VCS: [
                {
                    Coursetitle: "Git and Git lab - Start to Finish",
                    sections: [
                        {
                            title: "All",
                            videos: [
                                {title: "All"}
                            ]
                        }

                    ]
                }

            ]

        }

        console.log(JSON.stringify(this.nfvTelcoAutoCourses[this.areaname]))


        this.collapsibleElements = [
            {
            icon: 'mdi-image-filter-drama',
            title: 'First',
            content: [
                {material: 'Lorem ipsum dolor sit amet.'},
                {material: 'Lorem ipsum dolor sit amet.'},
                {material: 'Lorem ipsum dolor sit amet.'}
                ]
            },
            {
            icon: 'mdi-maps-place',
            title: 'Second',
            content: 'Lorem ipsum dolor sit amet.'
            },
            {
            icon: 'mdi-social-whatshot',
            title: 'Third',
            content: 'Lorem ipsum dolor sit amet.'
            }
        ];



    })


