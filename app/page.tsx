"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FloatingProjectsInfo from "@/components/FloatingProjectsInfo";
import PdfModal from "@/components/PdfModal";

export default function Home() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [isProjectLoading, setIsProjectLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [showInstagramModal, setShowInstagramModal] = useState(false);
  const [isInstagramLoading, setIsInstagramLoading] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [isAllProjectsLoading, setIsAllProjectsLoading] = useState(false);
  const [showTaskZModal, setShowTaskZModal] = useState(false);
  const [isTaskZLoading, setIsTaskZLoading] = useState(false);
  const [showImajicaModal, setShowImajicaModal] = useState(false);
  const [isImajicaLoading, setIsImajicaLoading] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [emailForm, setEmailForm] = useState({
    email: "",
    subject: "",
    message: ""
  });
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [showEmailSuccess, setShowEmailSuccess] = useState(false);
  const [showGithubModal, setShowGithubModal] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfTitle, setPdfTitle] = useState("");
  const [pdfPath, setPdfPath] = useState("");
  const [showCuisiningModal, setShowCuisiningModal] = useState(false);
  const [isCuisiningLoading, setIsCuisiningLoading] = useState(false);
  const [showTikTokModal, setShowTikTokModal] = useState(false);
  const [isTikTokLoading, setIsTikTokLoading] = useState(false);

  useEffect(() => {
    if (projectCount === 11) {
      const pauseTimeout = setTimeout(() => {
        setProjectCount(0);
      }, 10000);
      return () => clearTimeout(pauseTimeout);
    }

    const interval = setInterval(() => {
      setProjectCount((prev) => (prev < 11 ? prev + 1 : 11));
    }, 100);

    return () => clearInterval(interval);
  }, [projectCount]);

  const taskDescriptions: Record<string, string> = {
    //Shinryo Tasks that I did.
    "Created a custom timekeeping system": "We know how every company has its own set of rules when it comes to attendance and timekeeping. So, I developed a custom timekeeping system that allows for flexible configurations to accommodate different company policies, ensuring accurate tracking of employee hours.",
    "Fixed and improved the leave management system": "Shinryo doesn't allow employee to file leaves if they have pending attendance issues. I enhanced the leave management system to automatically check for any unresolved attendance discrepancies, tracking the leave credits of each employee properly and ensuring compliance with company policies.",
    "Added flexi schedule customizations": "Shinryo's complex flexi schedule setup was quite challenging. I implemented customizations that allow admins to properly set breaktimes for flexi schedule employees, ensuring that the system accurately reflects their working hours and break periods.",
    "Revised the DTR viewing module": "For Shinryo our template still lack of effeciency when it comes to managing timekeeping, so I revised the whole DTR viewing module wherein All the following are seen in one page: Edit Time in/out, Schedule Management, File Leave, Edit Overtime, Raw logs viewer, and Dtr Reports (xlsx, pdf) which made the system to be user friendly and managements are easy to navigate.",
    "Implemented a Complex Dtr Computation": "Built complex algorithms for DTR computation that handles various scenarios including overtime, night differentials, holiday pay, and other compensation rules.",
    
    //Imajica Tasks that I did.
    "Revised the Whole System process": "From Booking up to Branch Management, I revised the whole system flow to make it more efficient and user-friendly, ensuring seamless navigation and operation for all users.",
    "Implemented a POS style booking": "Created a Shopify-like Point of Sale (POS) Booking for quick service bookings, allowing staff to efficiently process customer appointments and payments (does not include GCASH API this is for tracking the sales only) in a streamlined manner.",
    "Product Management": "Developed a comprehensive product management module that enables administrators to create, edit, organize, and manage products efficiently, with support for categories, pricing, and inventory tracking.",
    "Service / Package offering Management": "Revised the Service / Package offering Management, allowing businesses to create customized service bundles, set pricing tiers, and manage service availability.",
    "Staff & Doctor's Commission Management": "Implemented a sophisticated commission tracking and calculation system for staff and doctors, automating commission calculations based on bookings, services rendered, and custom rules.",
    "Installment for Bookings": "Created a flexible installment payment system that allows customers to pay for bookings in multiple installments, with automated tracking and payment reminders."
  };

  const handleTaskClick = (taskName: string) => {
    setSelectedTask(taskName);
    setShowTaskModal(true);
  };

  const handleCardClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 3000);
  };

  const handleProjectClick = (projectName: string) => {
    setSelectedProject(projectName);
    setIsProjectLoading(true);
    setTimeout(() => {
      setIsProjectLoading(false);
      setShowProjectModal(true);
    }, 3000);
  };

  const handleTaskZClick = () => {
    setIsTaskZLoading(true);
    setTimeout(() => {
      setIsTaskZLoading(false);
      setShowTaskZModal(true);
    }, 3000);
  };

  const handleAllProjectsClick = () => {
    setIsAllProjectsLoading(true);
    setTimeout(() => {
      setIsAllProjectsLoading(false);
      router.push("/projects");
    }, 3000);
  };

  const handleImajicaClick = () => {
    setIsImajicaLoading(true);
    setTimeout(() => {
      setIsImajicaLoading(false);
      setShowImajicaModal(true);
    }, 3000);
  };

  const handleCuisiningClick = () => {
    setIsCuisiningLoading(true);
    setTimeout(() => {
      setIsCuisiningLoading(false);
      setShowCuisiningModal(true);
    }, 3000);
  };

  const handleEmailIconClick = () => {
    setIsEmailLoading(true);
    setTimeout(() => {
      setIsEmailLoading(false);
      setShowEmailModal(true);
    }, 3000);
  };

  const handleInstagramClick = () => {
    setIsInstagramLoading(true);
    setTimeout(() => {
      setIsInstagramLoading(false);
      setShowInstagramModal(true);
    }, 3000);
  };

  const handleGithubClick = () => {
    setIsGithubLoading(true);
    setTimeout(() => {
      setIsGithubLoading(false);
      setTimeout(() => {
        setShowGithubModal(true);
      }, 0);
    }, 3000);
  };

  const handleTikTokClick = () => {
    setIsTikTokLoading(true);
    setTimeout(() => {
      setIsTikTokLoading(false);
      setShowTikTokModal(true);
    }, 3000);
  };

  const handleOpenPdf = (title: string, path: string) => {
    setPdfTitle(title);
    setPdfPath(path);
    setShowPdfModal(true);
  };

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEmailSending(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: emailForm.email,
          to: "johnmanuelcuerdo@gmail.com",
          subject: emailForm.subject,
          message: emailForm.message,
        }),
      });

      if (response.ok) {
        // Wait 3 seconds before showing success modal
        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsEmailSending(false);
        setShowEmailModal(false);
        setShowEmailSuccess(true);
        setEmailForm({ email: "", subject: "", message: "" });
      } else {
        setIsEmailSending(false);
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsEmailSending(false);
      alert("Error sending email");
    }
  };

  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={`${styles.headerCard} pixel-border`}>
          <div className={`${styles.headerContent} ${styles.clickable}`} onClick={handleCardClick}>
            <div>
              <h1>Hi! I am Manuel.</h1>
              <p className={styles.subtitle}>future Software Engineer</p>
            </div>
            <div className={styles.headerImage}>
              <Image
                src="/assets/images/sakamoto-profile.png"
                alt="Manuel - Pixel Art Character"
                width={450}
                height={450}
                priority
              />
            </div>
          </div>
        </div>
        <div className={`${styles.statsCard} pixel-border`} onClick={handleAllProjectsClick} style={{ cursor: "pointer" }}>
          <h2>Project Count:</h2>
          <p className={styles.stats}>{projectCount}</p>
          <p className={styles.statsLabel}>Paid Projects</p>
        </div>
        <div className={`${styles.socialCard} pixel-border`}>
          <a onClick={handleInstagramClick} className={styles.clickable} aria-label="Instagram">
            <Image
              src="/assets/icon/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a onClick={handleEmailIconClick} className={styles.clickable} aria-label="Google Mail">
            <Image
              src="/assets/icon/google-mail.svg"
              alt="Google Mail"
              width={24}
              height={24}
            />
          </a>
          {/* <a href="#" aria-label="LinkedIn">
            <Image
              src="/assets/icon/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a> */}
          <a onClick={handleGithubClick} className={styles.clickable} aria-label="GitHub">
            <Image
              src="/assets/icon/github.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
          </a>
          <a onClick={handleTikTokClick} className={styles.clickable} aria-label="TikTok">
            <Image
              src="/assets/icon/tiktok.svg"
              alt="TikTok"
              width={24}
              height={24}
            />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className={styles.content}>
        <div className={`${styles.aboutCard} pixel-border`}>
          <h2>About Me</h2>
          
          <div className={styles.section}>
            <h3>Educational Attainment</h3>
            <ul>
              <li>University Of Caloocan City</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Work Experience</h3>
            <ul>
              <li>Full Stack Developer at Intracode IT Solutions</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Certificate of Employment</h3>
            <button 
              className={styles.certificateButton}
              onClick={() => handleOpenPdf("Certificate of Employment", "/assets/certificates/Certificate of Employment.pdf")}
            >
              📄 View Certificate
            </button>
          </div>

          <div className={styles.section}>
            <h3>Hobbies</h3>
            <ul>
              <li>Playing Mobile games; Growtopia</li>
              <li>Drinking Coffee</li>
              <li>Traveling</li>
              <li>Content Creation</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Current Specialization</h3>
            <ul>
              <li>HRIS Systems</li>
              <li>ERP System</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectsSection}>
          <h2>Featured Paid Projects</h2>
          <div className={styles.projectsGrid}>
            <div className={`${styles.projectCard} pixel-border`} onClick={() => handleProjectClick("Shinryo")}>
              <h3>Shinryo</h3>
              <p className={styles.projectDesc}>Project Description:</p>
              <p>A private HRIS focused on improving internal processes such as DTR computations, and payroll management.</p>
            </div>
            <div className={`${styles.projectCard} pixel-border`} onClick={handleImajicaClick}>
              <h3>Imajica</h3>
              <p className={styles.projectDesc}>Project Description:</p>
              <p>A web-based ERP System. Includes the following:</p>
              <ul className={styles.projectList}>
                <li>POS</li>
                <li>Staff Commission Management</li>
                <li>Product Management</li>
                <li>Inventory Management</li>
              </ul>
            </div>
            <div className={`${styles.projectCard} pixel-border`}>
              <h3>Imajica</h3>
              <p className={styles.projectDesc}>Project Description:</p>
              <p>A modular architecture implemented within a payroll system mainly for hiring employees.</p>
            </div>
          </div>

          <h2>Personal / School Projects</h2>
          <div className={styles.projectsGrid}>
            <div className={`${styles.projectCard} pixel-border`} onClick={handleTaskZClick}>
              <h3>TaskZ</h3>
              <p className={styles.projectDesc}>Project Description:</p>
              <p>A web-based task management website built to organize your project task and collaborate with other users!</p>
            </div>
            <div className={`${styles.projectCard} pixel-border`} onClick={handleCuisiningClick}>
              <h3>Cuisining</h3>
              <p className={styles.projectDesc}>Project Description:</p>
              <p>A web based 3d Cooking simulator with modular system inspired by TESDA's Cookery NC-II</p>
            </div>
            <div className={`${styles.projectCard} pixel-border`}></div>
          </div>
        </div>
      </section>

      {/* Loading Screen */}
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={`${styles.modal} pixel-border`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowModal(false)}>✕</button>
            <div className={styles.modalContent}>
              <div className={styles.modalInfo}>
                <h2>More About Me</h2>
                <div className={styles.infoItem}>
                  <label>Lives in:</label>
                  <p></p>
                </div>
                <div className={styles.infoItem}>
                  <label>Birthdate:</label>
                  <p></p>
                </div>
                <div className={styles.infoItem}>
                  <label>Province:</label>
                  <p></p>
                </div>
                <div className={styles.infoItem}>
                  <label>Goal:</label>
                  <p></p>
                </div>
                <div className={styles.infoItem}>
                  <label>My motto:</label>
                  <p></p>
                </div>
              </div>
              <div className={styles.modalImage}>
                <Image
                  src="/assets/images/ayo.jpg"
                  alt="Manuel - Ayo Cat"
                  width={300}
                  height={300}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Loading Screen */}
      {isProjectLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {showProjectModal && (
        <div className={styles.modalOverlay} onClick={() => setShowProjectModal(false)}>
          <div className={`${styles.modal} pixel-border`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowProjectModal(false)}>✕</button>
            <div className={styles.projectModalContent}>
              <div className={styles.projectInfo}>
                <h2>Shinryo Philippines</h2>
                {selectedProject === "Shinryo" && (
                  <div className={styles.tasksList}>
                    <h3>Tasks Completed:</h3>
                    <ul>
                      <li onClick={() => handleTaskClick("Created a custom timekeeping system")}>Created a custom timekeeping system</li>
                      <li onClick={() => handleTaskClick("Fixed and improved the leave management system")}>Fixed and improved the leave management system</li>
                      <li onClick={() => handleTaskClick("Added flexi schedule customizations")}>Added flexi schedule customizations</li>
                      <li onClick={() => handleTaskClick("Revised the DTR viewing module")}>Revised the DTR viewing module</li>
                      <li onClick={() => handleTaskClick("Implemented a Complex Dtr Computation")}>Implemented a Complex Dtr Computation</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className={styles.projectImage}>
                <Image
                  src="/assets/images/tankbuild.jpg"
                  alt="Project - Tankbuild"
                  width={250}
                  height={250}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Task Modal */}
      {showTaskModal && (
        <div className={`${styles.modalOverlay} ${styles.taskModalOverlay}`} onClick={() => setShowTaskModal(false)}>
          <div className={`${styles.modal} pixel-border`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowTaskModal(false)}>✕</button>
            <div className={styles.taskModalContent}>
              <h2>{selectedTask}</h2>
              <p>{selectedTask && taskDescriptions[selectedTask]}</p>
            </div>
          </div>
        </div>
      )}

      {/* Instagram Modal */}
      {showInstagramModal && (
        <div className={styles.modalOverlay} onClick={() => setShowInstagramModal(false)}>
          <div className={`${styles.instagramModal} pixel-border`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowInstagramModal(false)}>✕</button>
            <div className={styles.instagramProfileContent}>
              <div className={styles.instagramHeader}>
                <div className={styles.instagramProfilePic}>
                  <Image
                    src="/assets/images/profilepic.png"
                    alt="Manuel Profile"
                    width={120}
                    height={120}
                    priority
                  />
                </div>
              </div>

              <div className={styles.instagramInfo}>
                <h2>manwel.ac</h2>
                <p className={styles.instagramBio}>I definitely hate coding..</p>

                <div className={styles.instagramStats}>
                  <div className={styles.statItem}>
                    <p className={styles.statNumber}>13</p>
                    <p className={styles.statLabel}>Posts</p>
                  </div>
                  <div className={styles.statItem}>
                    <p className={styles.statNumber}>228</p>
                    <p className={styles.statLabel}>Followers</p>
                  </div>
                  <div className={styles.statItem}>
                    <p className={styles.statNumber}>259</p>
                    <p className={styles.statLabel}>Following</p>
                  </div>
                </div>

                <a 
                  href="https://www.instagram.com/manwel.ac/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.followButton}
                >
                  Follow
                </a>
              </div>

              <div className={styles.instagramGrid}>
                <div className={styles.gridItem}>
                  <Image
                    src="/assets/instagram/pic1.png"
                    alt="Instagram Post 1"
                    fill
                    className={styles.gridImage}
                    priority
                  />
                </div>
                <div className={styles.gridItem}>
                  <Image
                    src="/assets/instagram/pic2.png"
                    alt="Instagram Post 2"
                    fill
                    className={styles.gridImage}
                    priority
                  />
                </div>
                <div className={styles.gridItem}>
                  <Image
                    src="/assets/instagram/pic3.png"
                    alt="Instagram Post 3"
                    fill
                    className={styles.gridImage}
                    priority
                  />
                </div>
                <div className={styles.gridItem}>
                  <Image
                    src="/assets/instagram/pic4.png"
                    alt="Instagram Post 4"
                    fill
                    className={styles.gridImage}
                    priority
                  />
                </div>
                <div className={styles.gridItem}>
                  <Image
                    src="/assets/instagram/pic5.png"
                    alt="Instagram Post 5"
                    fill
                    className={styles.gridImage}
                    priority
                  />
                </div>
                <div className={styles.gridItem}>
                  <Image
                    src="/assets/instagram/pic6.png"
                    alt="Instagram Post 6"
                    fill
                    className={styles.gridImage}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* All Projects Loading Screen */}
      {isAllProjectsLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* Instagram Loading Screen */}
      {isInstagramLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* TikTok Loading Screen */}
      {isTikTokLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* TikTok Modal */}
      {showTikTokModal && (
        <div className={styles.modalOverlay} onClick={() => setShowTikTokModal(false)}>
          <div className={`${styles.tiktokModal} pixel-border`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowTikTokModal(false)}>✕</button>
            <div className={styles.tiktokProfileContent}>
              {/* Profile Header Section */}
              <div className={styles.tiktokProfileHeader}>
                <div className={styles.tiktokProfilePic}>
                  <Image
                    src="/assets/images/profilepic.png"
                    alt="Manuel TikTok Profile"
                    width={120}
                    height={120}
                    priority
                  />
                </div>

                <div className={styles.tiktokProfileInfo}>
                  <div className={styles.tiktokUsernameSection}>
                    <h2>@manwel.ac</h2>
                    <span>manwel</span>
                  </div>

                  <div className={styles.tiktokActionButtons}>
                    <a 
                      href="https://www.tiktok.com/@manwel.ac" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.tiktokButton}
                    >
                      Follow me!
                    </a>
                    <button className={styles.tiktokButtonSmall}>⚙️</button>
                    <button className={styles.tiktokButtonSmall}>📤</button>
                  </div>

                  <div className={styles.tiktokStats}>
                    <div className={styles.statItem}>
                      <p className={styles.statNumber}>193</p>
                      <p className={styles.statLabel}>Following</p>
                    </div>
                    <div className={styles.statItem}>
                      <p className={styles.statNumber}>6347</p>
                      <p className={styles.statLabel}>Followers</p>
                    </div>
                    <div className={styles.statItem}>
                      <p className={styles.statNumber}>261.9K</p>
                      <p className={styles.statLabel}>Likes</p>
                    </div>
                  </div>

                  <p className={styles.tiktokBio}>No bio yet.</p>
                </div>
              </div>

              {/* Tabs Section */}
              <div className={styles.tiktokTabs}>
                <button className={`${styles.tiktokTab} ${styles.tiktokTabActive}`}>
                  🎬 Videos
                </button>
                <button className={styles.tiktokTab}>🔁 Reposts</button>
                <button className={styles.tiktokTab}>❤️ Favorites</button>
                <button className={styles.tiktokTab}>👍 Liked</button>
              </div>

              {/* Video Grid */}
              <div className={styles.tiktokVideosGrid}>
                <div className={styles.tiktokVideoCard}>
                  <div className={styles.tiktokVideoThumb}>
                    <Image
                      src="/assets/images/laughingcat.jpg"
                      alt="TikTok Video 1"
                      fill
                      className={styles.gridImage}
                      priority
                    />
                  </div>
                  <div className={styles.tiktokVideoCount}>
                    <span>▶️ 303</span>
                  </div>
                </div>

                <div className={styles.tiktokVideoCard}>
                  <div className={styles.tiktokVideoThumb}>
                    <Image
                      src="/assets/images/ayo.jpg"
                      alt="TikTok Video 2"
                      fill
                      className={styles.gridImage}
                      priority
                    />
                  </div>
                  <div className={styles.tiktokVideoCount}>
                    <span>▶️ 1.8K</span>
                  </div>
                </div>

                <div className={styles.tiktokVideoCard}>
                  <div className={styles.tiktokVideoThumb}>
                    <Image
                      src="/assets/images/burnedout.jpg"
                      alt="TikTok Video 3"
                      fill
                      className={styles.gridImage}
                      priority
                    />
                  </div>
                  <div className={styles.tiktokVideoCount}>
                    <span>▶️ 261</span>
                  </div>
                </div>

                <div className={styles.tiktokVideoCard}>
                  <div className={styles.tiktokVideoThumb}>
                    <Image
                      src="/assets/images/tankbuild.jpg"
                      alt="TikTok Video 4"
                      fill
                      className={styles.gridImage}
                      priority
                    />
                  </div>
                  <div className={styles.tiktokVideoCount}>
                    <span>▶️ 518</span>
                  </div>
                </div>

                <div className={styles.tiktokVideoCard}>
                  <div className={styles.tiktokVideoThumb}>
                    <Image
                      src="/assets/images/laughingcat.jpg"
                      alt="TikTok Video 5"
                      fill
                      className={styles.gridImage}
                      priority
                    />
                  </div>
                  <div className={styles.tiktokVideoCount}>
                    <span>▶️ 290</span>
                  </div>
                </div>

                <div className={styles.tiktokVideoCard}>
                  <div className={styles.tiktokVideoThumb}>
                    <Image
                      src="/assets/images/ayo.jpg"
                      alt="TikTok Video 6"
                      fill
                      className={styles.gridImage}
                      priority
                    />
                  </div>
                  <div className={styles.tiktokVideoCount}>
                    <span>▶️ 309</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Email Loading Screen (Initial) */}
      {isEmailLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* TaskZ Loading Screen */}
      {isTaskZLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* Imajica Loading Screen */}
      {isImajicaLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* Cuisining Loading Screen */}
      {isCuisiningLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* TaskZ Modal */}
      {showTaskZModal && (
        <div className={styles.modalOverlay} onClick={() => setShowTaskZModal(false)}>
          <div className={`${styles.modal} pixel-border`} onClick={(e) => e.stopPropagation()} style={{ maxWidth: "1200px" }}>
            <button className={styles.closeButton} onClick={() => setShowTaskZModal(false)}>✕</button>
            <div className={styles.taskZModalContent}>
              <div className={styles.taskZInfo}>
                <h2>TaskZ</h2>
                <h3>Visit my website: <a href="https://task-z.vercel.app/login" target="_blank" rel="noopener noreferrer" className={styles.taskZLink}>https://task-z.vercel.app/login</a></h3>
                <p className={styles.projectDesc}>Features:</p>
                <ul className={styles.featuresList}>
                  <li>Organized task creation in a project</li>
                  <li>Collaborate with other users</li>
                  <li>Set your own deadlines</li>
                  <li>Emailed due dates</li>
                  <li>Secure data logins</li>
                  <li>FREE</li>
                </ul>
              </div>
              <div className={styles.taskZPreview}>
                <div className={styles.websitePreview}>
                  <iframe
                    src="https://task-z.vercel.app/login"
                    title="TaskZ Website Preview"
                    frameBorder="0"
                    allowFullScreen
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    style={{ display: "block" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Imajica Modal */}
      {showImajicaModal && (
        <div className={styles.modalOverlay} onClick={() => setShowImajicaModal(false)}>
          <div className={`${styles.modal} pixel-border`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowImajicaModal(false)}>✕</button>
            <div className={styles.projectModalContent}>
              <div className={styles.projectInfo}>
                <h2>Imajica ERP System</h2>
                <div className={styles.tasksList}>
                  <h3>Tasks Completed:</h3>
                  <ul>
                    <li onClick={() => handleTaskClick("Revised the Whole System process")}>Revised the Whole System process</li>
                    <li onClick={() => handleTaskClick("Implemented a POS style booking")}>Implemented a POS style booking</li>
                    <li onClick={() => handleTaskClick("Product Management")}>Product Management</li>
                    <li onClick={() => handleTaskClick("Service / Package offering Management")}>Service / Package offering Management</li>
                    <li onClick={() => handleTaskClick("Staff & Doctor's Commission Management")}>Staff &amp; Doctor&apos;s Commission Management</li>
                    <li onClick={() => handleTaskClick("Installment for Bookings")}>Installment for Bookings</li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectImage}>
                <Image
                  src="/assets/images/burnedout.jpg"
                  alt="Project - Burned Out"
                  width={250}
                  height={250}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Email Modal */}
      {showEmailModal && (
        <div className={styles.modalOverlay} onClick={() => setShowEmailModal(false)}>
          <div className={`${styles.emailModal} pixel-border`} onClick={(e) => e.stopPropagation()}>
            <div className={styles.emailHeader}>
              <div>
                <h2>Interested in working with me?</h2>
                <p className={styles.emailSubtitle}>Compose an Email</p>
              </div>
              <button className={styles.closeButton} onClick={() => setShowEmailModal(false)}>✕</button>
            </div>
            <form onSubmit={handleEmailSubmit} className={styles.emailForm}>
              <div className={styles.emailField}>
                <label>From:</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email"
                  value={emailForm.email}
                  onChange={handleEmailInputChange}
                  className={styles.emailInput}
                  required
                />
              </div>
              <div className={styles.emailField}>
                <label>To:</label>
                <input 
                  type="email" 
                  value="johnmanuelcuerdo@gmail.com" 
                  disabled 
                  className={styles.emailInput}
                />
              </div>
              <div className={styles.emailField}>
                <label>Subject:</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Enter subject"
                  value={emailForm.subject}
                  onChange={handleEmailInputChange}
                  className={styles.emailInput}
                  required
                />
              </div>
              <div className={styles.emailField}>
                <label>Message:</label>
                <textarea 
                  name="message"
                  placeholder="Write your formal email here..."
                  value={emailForm.message}
                  onChange={handleEmailInputChange}
                  className={styles.emailTextarea}
                  required
                />
              </div>
              <div className={styles.emailActions}>
                <button type="submit" className={styles.sendButton}>Send</button>
                <button 
                  type="button" 
                  className={styles.discardButton}
                  onClick={() => {
                    setShowEmailModal(false);
                    setEmailForm({ email: "", subject: "", message: "" });
                  }}
                >
                  Discard
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Email Loading Screen */}
      {isEmailSending && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
            <p>Sending email...</p>
          </div>
        </div>
      )}

      {/* Email Success Modal */}
      {showEmailSuccess && (
        <div className={styles.modalOverlay} onClick={() => setShowEmailSuccess(false)}>
          <div className={`${styles.successModal} pixel-border`} onClick={(e) => e.stopPropagation()}>
            <div className={styles.successContent}>
              <div className={styles.successIcon}>
                <i className="hn hn-check-circle"></i>
              </div>
              <h2>Email Sent Successfully!</h2>
              <p>Thank you for reaching out. I&apos;ll get back to you soon.</p>
              <button 
                className={`${styles.successButton} pixel-border`}
                onClick={() => setShowEmailSuccess(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Loading Screen */}
      {isGithubLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingBar}></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* Cuisining Modal */}
      {showCuisiningModal && (
        <div className={styles.modalOverlay} onClick={() => setShowCuisiningModal(false)}>
          <div className={`${styles.modal} pixel-border`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowCuisiningModal(false)}>✕</button>
            <div className={styles.projectModalContent}>
              <div className={styles.projectInfo}>
                <h2>Cuisining</h2>
                <div className={styles.tasksList}>
                  <h3>Project Details:</h3>
                  <p>A web based 3d Cooking simulator with modular system inspired by TESDA's Cookery NC-II</p>
                  <h3>My Role:</h3>
                  <ul>
                    <li>UI Designer</li>
                    <li>3D Model Designer</li>
                  </ul>
                </div>
              </div>
              <div className={styles.projectImage}>
                <Image
                  src="/assets/images/laughingcat.jpg"
                  alt="Project - Cuisining"
                  width={250}
                  height={250}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Modal */}
      {showGithubModal && (
        <div className={styles.modalOverlay} onClick={() => setShowGithubModal(false)}>
          <div className={`${styles.githubModal} pixel-border`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowGithubModal(false)}>✕</button>
            <div className={styles.githubProfileContent}>
              {/* GitHub Header with Tabs */}
              <div className={styles.githubProfileHeader}>
                <div className={styles.githubTabsNav}>
                  <div className={styles.githubTab}>Overview</div>
                  <div className={`${styles.githubTab} ${styles.active}`}>Repositories 19</div>
                  <div className={styles.githubTab}>Projects</div>
                </div>
              </div>

              {/* Profile Sidebar and Content */}
              <div className={styles.githubProfileLayout}>
                {/* Left Sidebar */}
                <div className={styles.githubSidebar}>
                  <div className={styles.githubProfilePic}>
                    <Image
                      src="/assets/images/sakamoto.jpg"
                      alt="Manuel GitHub Profile"
                      width={200}
                      height={200}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <h2 className={styles.githubFullName}>Manuel Cuerdo</h2>
                  <p className={styles.githubUsername}>manwelAC</p>
                  <p className={styles.githubBio}>I just keep learning, that&apos;s me</p>

                  <div className={styles.githubFollows}>
                    <span><strong>2</strong> followers</span>
                    <span><strong>5</strong> following</span>
                  </div>

                  <p className={styles.githubEmail}>johnmanuelcuerdo@gmail.com</p>
                </div>

                {/* Right Content Area */}
                <div className={styles.githubContent}>
                  <div className={styles.githubReposList}>
                    <div className={`${styles.githubRepoItem} pixel-border`}>
                      <div className={styles.repoHeader}>
                        <h3>iprecision</h3>
                        <span className={styles.repoBadge}>Private</span>
                      </div>
                      <p className={styles.repoDesc}>Tasks: Fix the leave flow and the Leave credits flow</p>
                      <div className={styles.repoMeta}>
                        <span className={styles.repoLang}>🟡 JavaScript</span>
                        <span className={styles.repoTime}>Updated yesterday</span>
                      </div>
                    </div>

                    <div className={`${styles.githubRepoItem} pixel-border`}>
                      <div className={styles.repoHeader}>
                        <h3>TaskZ</h3>
                        <span className={styles.repoBadge}>Private</span>
                      </div>
                      <p className={styles.repoDesc}>Task Management - Side Project</p>
                      <div className={styles.repoMeta}>
                        <span className={styles.repoLang}>🔵 TypeScript</span>
                        <span className={styles.repoTime}>Updated last week</span>
                      </div>
                    </div>

                    <div className={`${styles.githubRepoItem} pixel-border`}>
                      <div className={styles.repoHeader}>
                        <h3>amoure-booking</h3>
                        <span className={styles.repoBadge}>Private</span>
                      </div>
                      <p className={styles.repoDesc}>Booking Transport</p>
                      <div className={styles.repoMeta}>
                        <span className={styles.repoLang}>🟠 HTML</span>
                        <span className={styles.repoTime}>Updated 2 weeks ago</span>
                      </div>
                    </div>

                    <div className={`${styles.githubRepoItem} pixel-border`}>
                      <div className={styles.repoHeader}>
                        <h3>RiCement</h3>
                        <span className={styles.repoBadge}>Private</span>
                      </div>
                      <p className={styles.repoDesc}>Cement Management System</p>
                      <div className={styles.repoMeta}>
                        <span className={styles.repoLang}>🔵 TypeScript</span>
                        <span className={styles.repoTime}>Updated 3 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Projects Info Component */}
      <FloatingProjectsInfo />

      {/* PDF Modal Component */}
      <PdfModal 
        isOpen={showPdfModal}
        title={pdfTitle}
        pdfPath={pdfPath}
        onClose={() => setShowPdfModal(false)}
      />
    </main>
  );
}
          
