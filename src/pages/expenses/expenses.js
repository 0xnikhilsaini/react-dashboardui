import styles from './expenses.module.scss';
import React from 'react';
import {
  addIcon,
  menuIcon,
  person1,
  person2,
  person3,
} from './../../assest/imga_url';

import { BarChart, Bar, ResponsiveContainer } from 'recharts';

export default function Expenses() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },

    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <main className={styles.expenses}>
        <div className={styles.expenseCard}>
          <section className={styles.expnesesOverview}>
            <div className={styles.expensesHeader}>
              <div className={styles.expnesesAction}>
                <div className={styles.personImage}>
                  <img src={person1} alt="" />
                  <img src={person2} alt="" />
                  <img src={person3} alt="" />
                </div>
                <button>
                  <img src={addIcon} alt="" />
                </button>
              </div>
            </div>

            <p>01 - 25 March, 2020</p>

            <ResponsiveContainer width="100%" minHeight="9vh" height="9%">
              <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="rgba(21, 122, 255, 0.2)" />
              </BarChart>
            </ResponsiveContainer>

            <div className={styles.expensesOverview}>
              <p className={styles.expensesOverviewHeader}>Today</p>
              <button>
                <img src={menuIcon} alt="" />
              </button>
            </div>

            <ul>
              <li className="expenseItem">
                <div className={'expenseItemLeft'}>
                  <div className={'expensesItemdiv'}></div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
