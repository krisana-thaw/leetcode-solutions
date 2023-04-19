# Write your MySQL query statement below
SELECT emp.name as Employee
FROM Employee mng
LEFT JOIN (
    SELECT *
    FROM Employee emp
    WHERE emp.managerId IS NOT NULL
) AS emp ON emp.managerId = mng.id
WHERE emp.salary > mng.salary