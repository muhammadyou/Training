angular.module("MyServices", [])

    .factory("NFVCourseClickState", function() {
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


    .factory("CloudEveryoneCourses", function() {

        var courses = {
            CloudEveryone: {
                IntroductionETtoETLinuxETAcademy: [
                    {
                        Coursetitle: "Introduction to Linux Academy",
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

                Linux: [
                    {
                        Coursetitle: "Linux Essentials Certification",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-essentials"}
                                ]
                            }

                        ]
                    }
                ],

                CloudETandETDevOps: [

                    {
                        Coursetitle: "DevOps Essentials",
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
                        Coursetitle: "CompTIA Cloud Essentials Certifications",
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
                        Coursetitle: "Openstack Essentials",
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
                        Coursetitle: "Introduction to Python to Linux",
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
                        Coursetitle: "The System Administrator's Guide to Bash Scripting",
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
                        Coursetitle: "Introduction to Linux Academy",
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
                        Coursetitle: "Linux KVM Virtualization Essentials",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-kvm-virtualization"}
                                ]
                            }

                        ]
                    },

                    {
                        Coursetitle: "Linux Essentials Certification",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-essentials"}
                                ]
                            }

                        ]
                    }
                ],

                CloudETandETDevOps: [

                    {
                        Coursetitle: "DevOps Essentials",
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
                        Coursetitle: "CompTIA Cloud Essentials Certifications",
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
                        Coursetitle: "Openstack Essentials",
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
                        Coursetitle: "Openstack Foundation Certified Openstack Administrator",
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
                        Coursetitle: "Introduction to Python to Linux",
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
                        Coursetitle: "The System Administrator's Guide to Bash Scripting",
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
                        Coursetitle: "Git Quick Start",
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
                        Coursetitle: "Git and Git lab - Start to Finish",
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
                        Coursetitle: "Introduction to Linux Academy",
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

                Linux: [
                    {
                        Coursetitle: "Linux Essentials Certification",
                        sections: [
                            {
                                title: "All",
                                videos: [
                                    {title: "All", link: "https://linuxacademy.com/linux/training/course/name/linux-essentials"}
                                ]
                            }

                        ]
                    }
                ],

                CloudETandETDevOps: [

                    {
                        Coursetitle: "DevOps Essentials",
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
                        Coursetitle: "CompTIA Cloud Essentials Certifications",
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
                        Coursetitle: "Openstack Essentials",
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
                        Coursetitle: "Openstack Foundation Certified Openstack Administrator",
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
                        Coursetitle: "Introduction to Python to Linux",
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
                        Coursetitle: "The System Administrator's Guide to Bash Scripting",
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
                        Coursetitle: "Git Quick Start",
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
                        Coursetitle: "Git and Git lab - Start to Finish",
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




