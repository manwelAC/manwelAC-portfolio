import Image from 'next/image';
import styles from '../app/page.module.css';

export default function NoticeCharacter() {
  return (
    <div className={styles.noticeCharacterContainer}>
      <div className={styles.chatBubble}>
        <p>Some project descriptions are not done so it's disabled for the meantime</p>
        <div className={styles.bubbleTail}></div>
      </div>
      <div className={styles.characterImage}>
        <Image
          src="/assets/images/notice.png"
          alt="Notice Character"
          width={200}
          height={200}
          priority
        />
      </div>
    </div>
  );
}
