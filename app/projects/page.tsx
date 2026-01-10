"use client";

import styles from "../page.module.css";
import { useState, useRef } from "react";
import Link from "next/link";
import FloatingProjectsInfo from "@/components/FloatingProjectsInfo";
import NoticeCharacter from "@/components/NoticeCharacter";
import { FaPhp, FaLaravel, FaReact, FaNode, FaPython, FaVuejs, FaJava, FaAngular, FaJsSquare } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiTypescript, SiMongodb, SiSqlite, SiTailwindcss, SiFirebase, SiDjango, SiNextdotjs, SiJavascript, SiStripe, SiSpringboot, SiBootstrap } from 'react-icons/si';

export default function ProjectsPage() {
  const [selectedProjectDetails, setSelectedProjectDetails] = useState<string | null>(null);
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
  const [folderPosition, setFolderPosition] = useState<{ x: number; y: number } | null>(null);
  const [selectedSection, setSelectedSection] = useState<'company' | 'customs' | 'solutions' | 'tech' | null>(null);

  const techIconMap: Record<string, React.ReactNode> = {
    'PHP': <FaPhp />,
    'Laravel': <FaLaravel />,
    'React': <FaReact />,
    'Next.js': <SiNextdotjs />,
    'Node.js': <FaNode />,
    'Python': <FaPython />,
    'Vue.js': <FaVuejs />,
    'Java': <FaJava />,
    'Angular': <FaAngular />,
    'MySQL': <SiMysql />,
    'PostgreSQL': <SiPostgresql />,
    'MongoDB': <SiMongodb />,
    'SQLite': <SiSqlite />,
    'TypeScript': <SiTypescript />,
    'JavaScript': <FaJsSquare />,
    'Tailwind CSS': <SiTailwindcss />,
    'Firebase': <SiFirebase />,
    'Stripe API': <SiStripe />,
    'Django': <SiDjango />,
    'Spring Boot': <SiSpringboot />,
    'PhpMyAdmin': <FaPhp />,
    'Bootstrap': <SiBootstrap />,
  };

  const handleProjectSelect = (projectName: string, event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setFolderPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
    setSelectedProjectDetails(projectName);
    setShowProjectDetailsModal(true);
  };

  const allProjects = [
    { id: 1, name: "Shinryo", type: "HRIS System", disabled: false },
    { id: 2, name: "Imajica", type: "ERP System", disabled: false },
    { id: 3, name: "Imajica Modular", type: "Modular System", disabled: false },
    { id: 4, name: "UltraMRF", type: "Payroll System", disabled: false },
    { id: 5, name: "Powerlug", type: "Insurance Management System", disabled: true },
    { id: 6, name: "Injap", type: "Membership Website", disabled: true },
    { id: 7, name: "Dental Vera", type: "Payroll System", disabled: true },
    { id: 8, name: "Maxtel", type: "Payroll System", disabled: true },
    { id: 9, name: "Multitop", type: "Inventory Management System", disabled: true },
    { id: 10, name: "Iprecision", type: "Payroll System", disabled: true },
    { id: 11, name: "Amoure Booking", type: "Booking Management System", disabled: true },
  ];

  const projectDetailsData: Record<string, any> = {
    "Shinryo": {
      companyInfo: {
        description: "Shinryo (Philippines) Company, Incorporated is one of the country's leader in Mechanical and Electrical Engineering Subcontracting works, constantly providing innovative solutions wherever possible in building services environment – from adapting modern conceptual design to optimize human comfort to high-technology systems suited for various industrial applications",
        whyChoose: "Shinryo's old HRIS is already outdated and they ran through lots of issues, lack of technical support from their old provider."
      },
      customRequested: [
        "Custom timekeeping",
        "Flexible schedules",
        "Leave management",
        "DTR computations",
        "Custom Dtr View",
        "Complex Overtime calculations"
      ],
      problems: [
        "Duplicate Entries when Processing Raw logs",
        "No Date Segregations",
        "Slow Querying (10,000+ queries)",
        "Memory Issues",
        "Data Integrity Concerns"
      ],
      solutions: [
        "Implemented INSERT...ON DUPLICATE KEY UPDATE with lookup maps for O(1) access",
        "Optimized queries with whereBetween() and eager loading of reference tables",
        "In-memory caching with preloaded reference data, N+1 query elimination",
        "Batch processing (500 records/batch) with garbage collection (gc_collect_cycles)",
        "Added database transactions with rollback on failures",
        "Implemented a metadata logging system for smart mapping the correct timecard datas"
      ],
      techStack: ["PHP", "PhpMyAdmin", "JavaScript", "Laravel", "Bootstrap"]
    },
    "Imajica": {
      companyInfo: {
        description: "Imajica Aesthetics is a cosmetics and aesthetics company that offers beauty and personal care products and services. The company focuses on providing quality aesthetic solutions designed to enhance confidence and support individual beauty needs. Imajica Aesthetics is committed to professionalism, customer care, and delivering products that meet modern beauty standards.",
        whyChoose: "Imajica's old system is also web-based but their problem is that the old provider doesn't give customizations meaning their template is already built-in and can't be changed."
      },
      customRequested: [
        "POS booking system",
        "Product management",
        "Service packages",
        "Staff commission tracking",
        "Installment payments"
      ],
      problems: [
        "Rigid booking interface with limited customization",
        "No inventory/product tracking system",
        "Manual commission calculations for staff and doctors",
        "Limited installment payment management",
        "No session tracking for services/packages"
      ],
      solutions: [
        "Designed POS-style booking interface with dynamic service/package/product selection",
        "Built comprehensive product inventory management with stock history logging and quantity validation",
        "Implemented dual commission system - 10% automatic staff commission on products and variable rate doctor commissions on services/packages",
        "Created automated installment payment system with split payment tracking and payment status management",
        "Developed patient session management with remaining sessions tracking and session completion marking",
        "Built before/after photo documentation system for booking progress tracking",
        "Implemented service completion checklists with multi-service validation",
        "Added multi-branch access control with branch-specific filtering and permissions",
        "Generated dynamic invoice numbers with branch codes and timestamps",
        "Created comprehensive audit logging system for all booking operations"
      ],
      techStack: ["PHP", "PhpMyAdmin", "JavaScript", "Laravel", "Bootstrap"]
    },
    "Imajica Modular": {
      companyInfo: {
        description: "Imajica Aesthetics is a cosmetics and aesthetics company that offers beauty and personal care products and services. The company focuses on providing quality aesthetic solutions designed to enhance confidence and support individual beauty needs. Imajica Aesthetics is committed to professionalism, customer care, and delivering products that meet modern beauty standards.",
        whyChoose: "Since Imajica is already our client for their Payroll System, and ERP, they wanted to have a Modular System inside their Payroll System, the purpose is for hiring applicants."
      },
      customRequested: [
        "Modular architecture design",
        "Employee hiring management",
        "Module-based functionality",
        "Flexible permission system",
        "Multi-module integration"
      ],
      
      solutions: [
        "Designed modular architecture with YouTube embed integration for training videos with thumbnails",
        "Built dynamic quiz system with JSON-based question storage and real-time validation",
        "Implemented applicant module workflow - dashboard, test taking, quiz submission, and results tracking",
        "Created multi-role test result management (Applicant, Staff, Manager) with separate queries and permissions",
        "Developed module result compilation system that aggregates multiple quiz scores into a final assessment",
        "Implemented hiring status management with automatic role updates (Applicant → Staff when hired)",
        "Built certificate generation system using FPDI with dynamic positioning for names, titles, and dates",
        "Created module-specific and overall completion certificates with PDF template overlaying",
        "Implemented role-based access control with three user categories (applicant, staff, manager)",
        "Added comprehensive test results analytics with passing/failing status (75% threshold)",
        "Built DataTables integration for real-time test results display and applicant management",
        "Created transaction-based data operations with rollback for data integrity"
      ],
      techStack: ["PHP", "PhpMyAdmin", "JavaScript", "Laravel", "Bootstrap"]
    },
    "UltraMRF": {
      companyInfo: {
        description: "ULTRA MRF Tires Mags Services is a parts and automotive store that offers a wide range of tires, mags, and automotive products. The company also provides car services to support vehicle maintenance and performance needs. ULTRA MRF is committed to delivering reliable products and dependable services to its customers.",
        whyChoose: "ULTRA MRF choosed our services due to the need for a more efficient and tailored payroll system that could handle their specific requirements and improve overall payroll management."
      },
      customRequested: [
        "NTE Management (Notice To Explain)",
        "Discpinary Management (Disciplinary Action Notes)",
        "LOA Management (List Of Accountabilities)",
        "ER2 Generation"
      ],
      solutions: [
        "Since I'm not tasked to make complicated payroll computations, I focused on the custom features they requested.",
        "Built NTE management module with issuance tracking and status updates",
        "Developed disciplinary action notes system with note creation, editing, and history logging",
        "Implemented LOA management with accountability tracking and return date monitoring",
        "Created ER2 generation system with dynamic data population and PDF export functionality"
        
      ],
      techStack: ["PHP", "PhpMyAdmin", "JavaScript", "Laravel", "Bootstrap"]
    },
    "Powerlug": {
      companyInfo: {
        description: "Insurance management solutions provider.",
        whyChoose: "Need for policy and claim management system"
      },
      customRequested: [
        "Policy management",
        "Claim processing"
      ],
      solutions: [
        "Built policy management system",
        "Claim processing workflow"
      ],
      techStack: ["Angular", "Java", "Spring Boot", "PostgreSQL"]
    },
    "Injap": {
      companyInfo: {
        description: "Membership-based website platform.",
        whyChoose: "Need for subscription and membership management"
      },
      customRequested: [
        "User authentication",
        "Membership tiers",
        "Subscription management"
      ],
      solutions: [
        "Implemented membership system with tier management"
      ],
      techStack: ["Next.js", "Node.js", "MongoDB", "Stripe API"]
    },
    "Dental Vera": {
      companyInfo: {
        description: "Dental clinic payroll system.",
        whyChoose: "Need for specialized dental clinic operations"
      },
      customRequested: [
        "Dental staff payroll",
        "Appointment tracking"
      ],
      solutions: [
        "Created payroll system specific to dental operations"
      ],
      techStack: ["PHP", "Laravel", "MySQL"]
    },
    "Maxtel": {
      companyInfo: {
        description: "Telecom company payroll solution.",
        whyChoose: "Need for complex shift-based payroll"
      },
      customRequested: [
        "Complex payroll calculations",
        "Shift management"
      ],
      solutions: [
        "Developed payroll system handling multiple shifts and calculations"
      ],
      techStack: ["Python", "Django", "PostgreSQL"]
    },
    "Multitop": {
      companyInfo: {
        description: "Retail inventory management system.",
        whyChoose: "Need for comprehensive inventory tracking"
      },
      customRequested: [
        "Stock tracking",
        "Inventory reports",
        "Supplier management"
      ],
      solutions: [
        "Built comprehensive inventory system with analytics"
      ],
      techStack: ["Vue.js", "Node.js", "SQLite"]
    },
    "Iprecision": {
      companyInfo: {
        description: "Precision manufacturing payroll system.",
        whyChoose: "Need for integrated HR and payroll solution"
      },
      customRequested: [
        "Payroll",
        "Leave management",
        "Attendance tracking"
      ],
      solutions: [
        "Implemented integrated payroll and HR module"
      ],
      techStack: ["React", "Node.js", "MongoDB"]
    },
    "Amoure Booking": {
      companyInfo: {
        description: "Transport and booking management platform.",
        whyChoose: "Need for integrated booking and payment system"
      },
      customRequested: [
        "Booking system",
        "Payment processing",
        "Customer management"
      ],
      solutions: [
        "Created booking management system with payment integration"
      ],
      techStack: ["Next.js", "TypeScript", "Firebase"]
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.allProjectsContent}>
        <div className={styles.projectsPageHeader}>
          <div>
            <Link href="/" className={styles.backLink}>← Back to Home</Link>
            <h1>All Projects ({allProjects.length})</h1>
          </div>
        </div>
        <div className={styles.folderGrid}>
          {allProjects.map((project) => (
            <div 
              key={project.id} 
              className={`${styles.folderItem} pixel-border ${project.disabled ? styles.folderItemDisabled : ''}`}
              onClick={(e) => !project.disabled && handleProjectSelect(project.name, e)}
              style={{ cursor: project.disabled ? 'not-allowed' : 'pointer', opacity: project.disabled ? 0.5 : 1 }}
            >
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal - Floating Choices */}
      {showProjectDetailsModal && selectedProjectDetails && (
        <div 
          className={styles.modalOverlay}
          onClick={() => {
            if (selectedSection) {
              setSelectedSection(null);
            } else {
              setShowProjectDetailsModal(false);
            }
          }}
        >
          <div 
            className={styles.floatingContainer}
            style={folderPosition ? {
              '--folder-x': `${folderPosition.x}px`,
              '--folder-y': `${folderPosition.y}px`
            } as React.CSSProperties : undefined}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={() => setShowProjectDetailsModal(false)}>✕</button>
            {!selectedSection ? (
              <>
                <h2 className={styles.projectDetailsTitle}>{selectedProjectDetails}</h2>
                <div className={styles.floatingChoices}>
                  <div 
                    className={`${styles.floatingChoice} pixel-border`}
                    onClick={() => setSelectedSection('company')}
                  >
                    <div className={styles.choiceIcon}>🏢</div>
                    <h3>Company Info</h3>
                  </div>
                  <div 
                    className={`${styles.floatingChoice} pixel-border`}
                    onClick={() => setSelectedSection('customs')}
                  >
                    <div className={styles.choiceIcon}>📋</div>
                    <h3>Customs Requested</h3>
                  </div>
                  <div 
                    className={`${styles.floatingChoice} pixel-border`}
                    onClick={() => setSelectedSection('solutions')}
                  >
                    <div className={styles.choiceIcon}>✅</div>
                    <h3> Technical Problems & Solution</h3>
                  </div>
                  <div 
                    className={`${styles.floatingChoice} pixel-border`}
                    onClick={() => setSelectedSection('tech')}
                  >
                    <div className={styles.choiceIcon}>⚙️</div>
                    <h3>Tech Stack</h3>
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.projectDetailContent}>
                <button className={styles.backButton} onClick={() => setSelectedSection(null)}>← Back</button>
                {selectedSection === 'company' && (
                  <div className={styles.detailSection}>
                    <h2>Company Info</h2>
                    <p><strong>About:</strong></p>
                    <p>{projectDetailsData[selectedProjectDetails]?.companyInfo?.description}</p>
                    <p style={{ marginTop: '1.5rem' }}><strong>Why they chose our service:</strong></p>
                    <p>{projectDetailsData[selectedProjectDetails]?.companyInfo?.whyChoose}</p>
                  </div>
                )}
                {selectedSection === 'customs' && (
                  <div className={styles.detailSection}>
                    <h2>Customs Requested</h2>
                    {Array.isArray(projectDetailsData[selectedProjectDetails]?.customRequested) ? (
                      <ul className={styles.detailList}>
                        {projectDetailsData[selectedProjectDetails]?.customRequested.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{projectDetailsData[selectedProjectDetails]?.customRequested}</p>
                    )}
                  </div>
                )}
                {selectedSection === 'solutions' && (
                  <div className={styles.detailSection}>
                    <h2>Problems & Solution</h2>
                    <div>
                      <p style={{ marginTop: '1.5rem', marginBottom: '1rem' }}><strong>Problems Encountered:</strong></p>
                      {Array.isArray(projectDetailsData[selectedProjectDetails]?.problems) ? (
                        <ul className={`${styles.detailList} ${styles.problemList}`}>
                          {projectDetailsData[selectedProjectDetails]?.problems.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                      <p style={{ marginTop: '1.5rem', marginBottom: '1rem' }}><strong>Solutions Implemented:</strong></p>
                      {Array.isArray(projectDetailsData[selectedProjectDetails]?.solutions) ? (
                        <ul className={`${styles.detailList} ${styles.solutionList}`}>
                          {projectDetailsData[selectedProjectDetails]?.solutions.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{projectDetailsData[selectedProjectDetails]?.solutions}</p>
                      )}
                    </div>
                  </div>
                )}
                {selectedSection === 'tech' && (
                  <div className={styles.detailSection}>
                    <h2>Tech Stack</h2>
                    {Array.isArray(projectDetailsData[selectedProjectDetails]?.techStack) ? (
                      <div className={styles.techStackContainer}>
                        {projectDetailsData[selectedProjectDetails]?.techStack.map((item: string, index: number) => (
                          <div key={index} className={styles.techStackItem}>
                            <span className={styles.techIcon}>{techIconMap[item] || '⚙️'}</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>{projectDetailsData[selectedProjectDetails]?.techStack}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Projects Info Component */}
      <FloatingProjectsInfo />

      {/* Notice Character Component */}
      <NoticeCharacter />
    </main>
  );
}
