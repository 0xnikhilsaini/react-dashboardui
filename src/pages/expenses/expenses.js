import styles from './expenses.module.scss';
import React, { useState } from 'react';
import {
  addIcon,
  menuIcon,
  person1,
  person2,
  person3,
} from './../../assest/imga_url';
import cartIcon from './../../assest/cartIcon.svg';

import { Cell, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { Cell } from 'recharts/types/component/Cell';

export default function Expenses() {
  const [activeIndex, SetActiveIndex] = useState(0);
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

  const onMouseOver = (data, index) => {
    SetActiveIndex(index);
  };

  return (
    <>
      <main className={styles.expenses}>
        <div className={styles.expenseCard}>
          <section className={styles.expnesesOverview}>
            <div className={styles.expensesHeader}>
              <p className={styles.expensesTitle}>Expenses</p>
              <div className={styles.expnesesAction}>
                <div className={styles.personImage}>
                  <img className={styles.personOne} src={person1} alt="" />
                  <img className={styles.personTwo} src={person2} alt="" />
                  <img className={styles.personThree} src={person3} alt="" />
                </div>
                <button>
                  <img className={styles.addIcon} src={addIcon} alt="" />
                </button>
              </div>
            </div>

            <p className={styles.dateRange}>01 - 25 March, 2020</p>

            <ResponsiveContainer width="100%" minHeight="9vh" height="9%">
              <BarChart width={150} height={40} data={data}>
                <Bar
                  dataKey="uv"
                  fill="rgba(21, 122, 255, .2)"
                  onMouseOver={onMouseOver}
                >
                  {data.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={
                        index === activeIndex
                          ? 'rgb(21, 122, 255)'
                          : 'rgba(21, 122, 255, .2)'
                      }
                      key={index}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>Today</p>
              <button>
                <img src={menuIcon} alt="option" />
              </button>
            </div>

            <ul>
              <li className={styles.expenseItem}>
                <div className={styles.expenseItemLeft}>
                  <div className={styles.expensesItemdiv}></div>
                  <img src={cartIcon} alt="Cart" />

                  <div className={styles.expenItemDetails}>
                    <p className={styles.expenItemTitle}>Grocery</p>
                    <p className={styles.expenItemTime}>
                      5:12 pm • Belanja di pasar
                    </p>
                  </div>

                  <p className={styles.expenItemPrice}>-326.800</p>
                </div>
              </li>

              <li className={styles.expenseItem}>
                <div className={styles.expenseItemLeft}>
                  <div className={styles.expensesItemdiv}></div>
                  <img src={cartIcon} alt="Cart" />

                  <div className={styles.expenItemDetails}>
                    <p className={styles.expenItemTitle}>Grocery</p>
                    <p className={styles.expenItemTime}>
                      5:12 pm • Belanja di pasar
                    </p>
                  </div>

                  <p className={styles.expenItemPrice}>-326.800</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
