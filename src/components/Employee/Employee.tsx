// /src/components/Employee/Employee.tsx
import React from 'react';
import styles from './Employee.module.scss';
import { employeeBudgets } from '../../constants/NavBarData';
import ArrowBottomIcon from '../icons/ArrowBottomIcon';
import ArrowTopIcon from '../icons/ArrowTopIcon';
import { useSelector } from 'react-redux';
import { selectEmployees } from '../../redux/TableData/TableData';
const Employee: React.FC = () => {
  const data = useSelector(selectEmployees);
  return (
    <div className={styles.employeeContainer}>
      <div className={styles.employeeHeader}>
        <h2>Employee</h2>
        <p>{data.length} results found</p>
      </div>

      <div className={styles.budgetCardsContainer}>
        {employeeBudgets.map((budget) => (
          <div
            key={budget.id}
            className={`${styles.budgetCard} ${budget.isSelected ? styles.active : ''}`}
          >
            <div className={styles.cardHeader}>
              <span>{budget.title}</span>
              <span className={styles[budget.arrowDirection]}>
                {budget.arrowDirection !== 'up' ? <ArrowBottomIcon/> : <ArrowTopIcon/>}
              </span>
            </div>
            <p className={styles.amount}>{budget.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;
