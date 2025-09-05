"use client";
import Link from 'next/link';
import styles from './PlayerStats.module.css';
import { useEffect, useState } from 'react';

export default function PlayerStats({ playerName, stats }) {

  return (
    <Link href={`/player/${encodeURIComponent(playerName)}`} className={styles.card}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img
          src={`https://mc-heads.net/avatar/${(playerName)}`}
          alt={`${playerName} avatar`}
          width={32}
          height={32}
          style={{ borderRadius: '4px', background: '#222' }}
        />
        <h2 style={{ margin: 0 }}>{playerName}</h2>
      </div>
      <ul>
        <li><strong>Wins:</strong> {stats.wr_wins}</li>
        <li><strong>Loses:</strong> {stats.wr_lose}</li>
        <li><strong>Seeker Wins:</strong> {stats.wr_seeker_wins ?? 0}</li>
        <li><strong>Hider Wins:</strong> {stats.wr_hider_wins ?? 0}</li>
        <li><strong>System:</strong> {stats.wr_system}%</li>
        <li><strong>Total Played:</strong> {stats.wr_total}</li>
      </ul>
    </Link>
  );
}