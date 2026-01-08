"use client";

import styles from "../page.module.css";
import { useState, useRef } from "react";
import Link from "next/link";
import FloatingProjectsInfo from "@/components/FloatingProjectsInfo";

export default function ProjectsPage() {
  const [selectedProjectDetails, setSelectedProjectDetails] = useState<string | null>(null);
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
  const [folderPosition, setFolderPosition] = useState<{ x: number; y: number } | null>(null);

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
    { id: 1, name: "Shinryo", type: "HRIS System" },
    { id: 2, name: "Imajica", type: "ERP System" },
    { id: 3, name: "Imajica", type: "Modular System" },
    { id: 4, name: "UltraMRF", type: "Payroll System" },
    { id: 5, name: "Powerlug", type: "Insurance Management System" },
    { id: 6, name: "Injap", type: "Membership Website" },
    { id: 7, name: "Dental Vera", type: "Payroll System" },
    { id: 8, name: "Maxtel", type: "Payroll System" },
    { id: 9, name: "Multitop", type: "Inventory Management System" },
    { id: 10, name: "Iprecision", type: "Payroll System" },
    { id: 11, name: "Amoure Booking", type: "Booking Management System" },
  ];

  const projectDetailsData: Record<string, any> = {
    "Shinryo": {
      companyInfo: "A private HRIS company focused on streamlining HR processes.",
      customRequested: "Custom timekeeping, flexible schedules, leave management, DTR computations",
      solutions: "Implemented custom timekeeping system, leave management with attendance checks, flexi schedule customizations, revised DTR module",
      techStack: "PHP, Laravel, MySQL, React, TypeScript"
    },
    "Imajica": {
      companyInfo: "A web-based ERP service company for beauty and wellness businesses.",
      customRequested: "POS booking system, product management, service packages, staff commission tracking, installment payments",
      solutions: "Designed POS-style booking interface, built product and service management modules, implemented commission system, created installment payment system",
      techStack: "Next.js, TypeScript, PostgreSQL, Node.js, Tailwind CSS"
    },
    "UltraMRF": {
      companyInfo: "A payroll management system company.",
      customRequested: "Payroll processing, employee management, deductions calculation",
      solutions: "Developed payroll computation algorithms, employee data management",
      techStack: "React, JavaScript, Node.js, MongoDB"
    },
    "Powerlug": {
      companyInfo: "Insurance management solutions provider.",
      customRequested: "Policy management, claim processing",
      solutions: "Built policy management system, claim processing workflow",
      techStack: "Angular, Java, Spring Boot, PostgreSQL"
    },
    "Injap": {
      companyInfo: "Membership-based website platform.",
      customRequested: "User authentication, membership tiers, subscription management",
      solutions: "Implemented membership system with tier management",
      techStack: "Next.js, Node.js, MongoDB, Stripe API"
    },
    "Dental Vera": {
      companyInfo: "Dental clinic payroll system.",
      customRequested: "Dental staff payroll, appointment tracking",
      solutions: "Created payroll system specific to dental operations",
      techStack: "PHP, Laravel, MySQL"
    },
    "Maxtel": {
      companyInfo: "Telecom company payroll solution.",
      customRequested: "Complex payroll calculations, shift management",
      solutions: "Developed payroll system handling multiple shifts and calculations",
      techStack: "Python, Django, PostgreSQL"
    },
    "Multitop": {
      companyInfo: "Retail inventory management system.",
      customRequested: "Stock tracking, inventory reports, supplier management",
      solutions: "Built comprehensive inventory system with analytics",
      techStack: "Vue.js, Node.js, SQLite"
    },
    "Iprecision": {
      companyInfo: "Precision manufacturing payroll system.",
      customRequested: "Payroll, leave management, attendance tracking",
      solutions: "Implemented integrated payroll and HR module",
      techStack: "React, Node.js, MongoDB"
    },
    "Amoure Booking": {
      companyInfo: "Transport and booking management platform.",
      customRequested: "Booking system, payment processing, customer management",
      solutions: "Created booking management system with payment integration",
      techStack: "Next.js, TypeScript, Firebase"
    }
  };

  return (
    <main className={styles.main}>
      <div className={`${styles.allProjectsContent} pixel-border`}>
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
              className={`${styles.folderItem} pixel-border`}
              onClick={(e) => handleProjectSelect(project.name, e)}
            >
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal - Floating Choices */}
      {showProjectDetailsModal && selectedProjectDetails && (
        <div className={styles.modalOverlay} onClick={() => setShowProjectDetailsModal(false)}>
          <div 
            className={styles.floatingContainer}
            style={folderPosition ? {
              '--folder-x': `${folderPosition.x}px`,
              '--folder-y': `${folderPosition.y}px`
            } as React.CSSProperties : undefined}
          >
            <button className={styles.closeButton} onClick={() => setShowProjectDetailsModal(false)}>✕</button>
            <h2 className={styles.projectDetailsTitle}>{selectedProjectDetails}</h2>
            <div className={styles.floatingChoices}>
              <div className={`${styles.floatingChoice} pixel-border`}>
                <div className={styles.choiceIcon}>🏢</div>
                <h3>Company Info</h3>
            
              </div>
              <div className={`${styles.floatingChoice} pixel-border`}>
                <div className={styles.choiceIcon}>📋</div>
                <h3>Customs Requested</h3>
               
              </div>
              <div className={`${styles.floatingChoice} pixel-border`}>
                <div className={styles.choiceIcon}>✅</div>
                <h3>Solutions</h3>
                
              </div>
              <div className={`${styles.floatingChoice} pixel-border`}>
                <div className={styles.choiceIcon}>⚙️</div>
                <h3>Tech Stack</h3>
                
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Projects Info Component */}
      <FloatingProjectsInfo />
    </main>
  );
}
