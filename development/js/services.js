angular.module("MyServices", [])

    .factory("SessionStorage", function() {
        var name = "";

        return {
            set: function(key, value){
                name = value
                sessionStorage.setItem(key, name)  // store it during session as to make it available all the time
            },
            get: function(key){
                name = sessionStorage.getItem(key);  // get it from the session storage so if the window is refreshed, it get the area name
                return name;
            }
        }

    })

    .factory("LearningPaths", function(){
        var data  = [
            {title: "Telco Cloud and Automation", state: "main.nfvProgram.TelcoAutoLearningPth"},
            {title: "VNF Owners", state: "main.nfvProgram.VNFOwnLearningPth"},
            {title: "Cloud for Everyone & Management", state: "main.nfvProgram.EveryoneLearningPth"}
        ]

        return {
            get: function(){
                return data;
            }
        }
    })

    .factory("SectionsInDropdown", function(){
        var data = [
            {section: "Emerging Technologies", link:"main.nfvProgram.TelcoAutoLearningPth",  learningPath:"Telco Cloud and Automation", details: 'You are assigned to Telco Cloud and Automation learning path. Please "click" on it to follow the steps'},
            {section: "Network Automation", link:"main.nfvProgram.TelcoAutoLearningPth", learningPath:"Telco Cloud and Automation", details: 'You are assigned to Telco Cloud and Automation learning path. Please "click" on it and follow the steps'},
            {section: "Broadband Services", link:"main.nfvProgram.VNFOwnLearningPth", learningPath:"VNF Owners", details: 'You are assigned to VNF Owners learning path. Please "click" on it to follow the steps'},
            {section: "Fixed and Mobile Core Planning", link:"main.nfvProgram.VNFOwnLearningPth", learningPath:"VNF Owners", details: 'You are assigned to VNF Owners learning path. Please "click" on it to follow the steps'},
            {section: "Network Analysis and Business Planning", link:"main.nfvProgram.VNFOwnLearningPth", learningPath:"VNF Owners", details: 'You are assigned to VNF Owners learning path. Please "click" on it to follow the steps'},
            {section: "Service Quality Management", link:"main.nfvProgram.EveryoneLearningPth", learningPath:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management learning path. Please "click" on it to follow the steps'},
            {section: "ND Projects", link:"main.nfvProgram.EveryoneLearningPth", learningPath:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management learning path. Please "click" on it to follow the steps'},
            {section: "Business Development & Delivery Management", link:"main.nfvProgram.EveryoneLearningPth", learningPath:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management learning path. Please "click" on it to follow the steps'},
            {section: "Network Infrastructure Development", link:"main.nfvProgram.EveryoneLearningPth", learningPath:"Cloud for Everyone & Management", details: 'You are assigned to Cloud for Everyone & Management learning path. Please "click" on it to follow the steps'}
        ];

        return{
            get: function(){
                return data;
            }
        }
    })


    .factory("CloudEveryoneCourses", function() {

        var courses = {
            CloudEveryone: {
                IntroductionETtoETLinuxETAcademy: [
                    {
                        Coursetitle: "Phase 1: Introduction to Linux Academy",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/introduction-to-pinehead"}
                                ]
                            }
                        ]
                    }

                ],

                LinuxETandETVirtualization: [
                    {
                        Coursetitle: "Phase 1: Linux Essentials Certification",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-essentials"}
                                ]
                            }

                        ]
                    },
                    {
                        Coursetitle: "Phase 1: Linux KVM Virtualization Essentials",
                        sections: [
                            {
                                title: "Introduction",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-kvm-virtualization"}
                                ]
                            },
                            {
                                title: "Virtualization",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-kvm-virtualization"}
                                ]
                            },
                            {
                                title: "KVM Overview",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-kvm-virtualization"}
                                ]
                            }



                        ]
                    }
                ],

                CloudETandETDevOps: [

                    {
                        Coursetitle: "Phase 1: DevOps Essentials",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/devops/training/course/name/devops-essentials"}
                                ]
                            }

                        ]
                    },

                    {
                        Coursetitle: "Phase 1: CompTIA Cloud Essentials Certifications",
                        sections: [
                            {
                                title: "Characteristics of cloud services from a business perspective",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/cloud-essentials"}
                                ]
                            },
                            {
                                title: "Steps to successful adoption of cloud computing",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/cloud-essentials"}
                                ]
                            },
                            {
                                title: "Understanding the impact and changes of cloud computing on IT service management in a typical organization",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/cloud-essentials"}
                                ]
                            }
                        ]
                    }

                ],



                OpenStack: [
                    {
                        Coursetitle: "Phase 1: Openstack Essentials",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/openstack/training/course/name/openstack-essentials"}
                                ]
                            }

                        ]
                    }

                ],


                Scripting: [
                    {
                        Coursetitle: "Phase 1: Introduction to Python to Linux",
                        sections: [
                            {
                                title: "Introduction to Python to Linux",
                                videos: [
                                    {title: "Getting Started with Python 3", link: "https://linuxacademy.com/linux/training/lesson/name/getting-started-with-python-3"}
                                ]
                            }

                        ]
                    },

                    {
                        Coursetitle: "Phase 1: The System Administrator's Guide to Bash Scripting",
                        sections: [
                            {
                                title: "Introduction",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/the-system-administrators-guidep-to-bash-scripting"}
                                ]
                            },

                            {
                                title: "Core Concepts",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/the-system-administrators-guidep-to-bash-scripting"}
                                ]
                            }

                        ]
                    }

                ]
            }

        };


        return {

            get: function(){
                return courses;
            }
        }

    })

    .factory("TelcoAutoCourses", function() {
        var courses =  {
            TelcoAuto: {
                IntroductionETtoETLinuxETAcademy: [
                    {
                        Coursetitle: "Phase 1: Introduction to Linux Academy",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/introduction-to-pinehead"}
                                ]
                            }
                        ]
                    }

                ],

                LinuxETandETVirtualization: [

                    {
                        Coursetitle: "Phase 1: Linux Essentials Certification",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-essentials"}
                                ]
                            }

                        ]
                    },
                    {
                        Coursetitle: "Phase 1: Linux KVM Virtualization Essentials",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-kvm-virtualization"}
                                ]
                            }

                        ]
                    }

                ],

                CloudETandETDevOps: [

                    {
                        Coursetitle: "Phase 1: CompTIA Cloud Essentials Certifications",
                        sections: [
                            {
                                title: "Characteristics of cloud services from a business perspective",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/cloud-essentials"}
                                ]
                            },
                            {
                                title: "Technical perspectives/cloud types",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/cloud-essentials"}
                                ]
                            },
                            {
                                title: "Steps to successful adoption of cloud computing",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/cloud-essentials"}
                                ]
                            },
                            {
                                title: "Understanding the impact and changes of cloud computing on IT service management in a typical organization",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/cloud-essentials"}
                                ]
                            }
                        ]
                    },

                    {
                        Coursetitle: "Phase 1: DevOps Essentials",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/devops/training/course/name/devops-essentials"}
                                ]
                            }

                        ]
                    }
                ],



                OpenStack: [
                    {
                        Coursetitle: "Phase 1: Openstack Essentials",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/openstack/training/course/name/openstack-essentials"}
                                ]
                            }

                        ]
                    },

                    {
                        Coursetitle: "Phase 2: Openstack Foundation Certified Openstack Administrator",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/openstack/training/course/name/openstack-foundation-certified-openstack-administrator"}
                                ]
                            }

                        ]
                    }

                ],


                Scripting: [
                    {
                        Coursetitle: "Phase 2: Introduction to Python to Linux",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/introduction-to-python"}
                                ]
                            }

                        ]
                    },

                    {
                        Coursetitle: "Phase 2: The System Administrator's Guide to Bash Scripting",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/the-system-administrators-guidep-to-bash-scripting"}
                                ]
                            }

                        ]
                    }

                ],

                VersionETControlETSystem: [

                    {
                        Coursetitle: "Phase 2: Git Quick Start",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/git-quick-start"}
                                ]
                            }

                        ]
                    },


                    {
                        Coursetitle: "Phase 2: Git and Git lab - Start to Finish",
                        sections: [
                            {
                                title: "Working with Atlassian Bitbucket",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/git-gitlab"}
                                ]
                            },

                            {
                                title: "Gitlab: Installation, Configuration and Use",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/git-gitlab"}
                                ]
                            }


                        ]
                    }

                ]
            }

        }
        return {

            get: function(){
                return courses;
            }
        }

    })


    .factory("VNFOwnCourses", function() {
        var courses =  {
            VNFOwn: {
                IntroductionETtoETLinuxETAcademy: [
                    {
                        Coursetitle: "Phase 1: Introduction to Linux Academy",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/introduction-to-pinehead"}
                                ]
                            }
                        ]
                    }

                ],

                LinuxETandETVirtualization: [
                    {
                        Coursetitle: "Phase 1: Linux Essentials Certification",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-essentials"}
                                ]
                            }

                        ]
                    },
                    {
                        Coursetitle: "Phase 1: Linux KVM Virtualization Essentials",
                        sections: [
                            {
                                title: "Introduction",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-kvm-virtualization"}
                                ]
                            },
                            {
                                title: "Virtualization",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-kvm-virtualization"}
                                ]
                            },
                            {
                                title: "KVM Overview",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-kvm-virtualization"}
                                ]
                            }



                        ]
                    }
                ],

                CloudETandETDevOps: [

                    {
                        Coursetitle: "Phase 1: DevOps Essentials",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/devops/training/course/name/devops-essentials"}
                                ]
                            }

                        ]
                    },

                    {
                        Coursetitle: "Phase 1: CompTIA Cloud Essentials Certifications",
                        sections: [
                            {
                                title: "Characteristics of cloud services from a business perspective",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/cloud-essentials"}
                                ]
                            },
                            {
                                title: "Technical perspectives/cloud types",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/cloud-essentials"}
                                ]
                            },
                            {
                                title: "Steps to successful adoption of cloud computing",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/cloud-essentials"}
                                ]
                            },
                            {
                                title: "Understanding the impact and changes of cloud computing on IT service management in a typical organization",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/cloud-essentials"}
                                ]
                            }
                        ]
                    }

                ],



                OpenStack: [
                    {
                        Coursetitle: "Phase 1: Openstack Essentials",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/openstack/training/course/name/openstack-essentials"}
                                ]
                            }

                        ]
                    },

                    {
                        Coursetitle: "Phase 2: Openstack Foundation Certified Openstack Administrator",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/openstack/training/course/name/openstack-foundation-certified-openstack-administrator"}
                                ]
                            }

                        ]
                    }

                ],


                Scripting: [
                    {
                        Coursetitle: "Phase 2: Introduction to Python to Linux",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/introduction-to-python"}
                                ]
                            }

                        ]
                    },

                    {
                        Coursetitle: "Phase 2: The System Administrator's Guide to Bash Scripting",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/the-system-administrators-guidep-to-bash-scripting"}
                                ]
                            }

                        ]
                    }

                ],

                VersionETControlETSystem: [

                    {
                        Coursetitle: "Phase 2: Git Quick Start",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/git-quick-start"}
                                ]
                            }

                        ]
                    },


                    {
                        Coursetitle: "Phase 2: Git and Git lab - Start to Finish",
                        sections: [
                            {
                                title: "Working with Atlassian Bitbucket",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/git-gitlab"}
                                ]
                            },

                            {
                                title: "Gitlab: Installation, Configuration and Use",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/git-gitlab"}
                                ]
                            }


                        ]
                    }

                ]
            }

        }
        return {

            get: function(){
                return courses;
            }
        }

    })




