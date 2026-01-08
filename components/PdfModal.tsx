"use client";

import { useState } from "react";
import styles from "../app/page.module.css";

interface PdfModalProps {
  isOpen: boolean;
  title: string;
  pdfPath: string;
  onClose: () => void;
}

export default function PdfModal({ isOpen, title, pdfPath, onClose }: PdfModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div 
        className={`${styles.pdfModal} pixel-border`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.pdfHeader}>
          <h2>{title}</h2>
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            aria-label="Close PDF"
          >
            ✕
          </button>
        </div>
        
        <div className={styles.pdfContainer}>
          <iframe
            src={`${pdfPath}#toolbar=1`}
            title={title}
            className={styles.pdfViewer}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}
