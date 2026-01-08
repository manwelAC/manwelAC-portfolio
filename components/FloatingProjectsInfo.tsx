"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

export default function FloatingProjectsInfo() {
  const [showProjectsInfo, setShowProjectsInfo] = useState(false);

  return (
    <>
      {/* Floating Projects Info Button */}
      <button 
        className={styles.floatingInfoButton}
        onClick={() => setShowProjectsInfo(!showProjectsInfo)}
        title="Project Information"
      >
        ?
      </button>

      {/* Floating Projects Info Bubble */}
      {showProjectsInfo && (
        <div className={styles.floatingInfoBubble} onClick={(e) => e.stopPropagation()}>
          <button 
            className={styles.closeBubbleButton}
            onClick={() => setShowProjectsInfo(false)}
          >
            ✕
          </button>
          
          <div className={styles.bubbleContent}>
            <div className={styles.bubbleImage}>
              <Image
                src="/assets/images/sakamoto-profile.png"
                alt="Manuel - Sakamoto"
                width={100}
                height={100}
                priority
              />
            </div>
            
            <div className={styles.bubbleText}>
              <h3>Heyya! 👋</h3>
              <p>
                I <strong>cannot share the project URLs</strong> due to <strong>privacy and security concerns</strong>. These projects contain sensitive client data and important business information that must remain protected.
              </p>
              
              <p className={styles.proofText}>
                However, to validate my work, I provide:
              </p>
              
              <ul className={styles.bubbleList}>
                <li>✓ Company Information</li>
                <li>✓ Custom Requested Features</li>
                <li>✓ Technical Solutions I Implemented</li>
                <li>✓ Tech Stack I Used</li>
              </ul>
              
              <p className={styles.verificationText}>
                <strong>I am the certified and verified developer</strong> of these projects with proven contributions, technical expertise, and direct implementation records.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
