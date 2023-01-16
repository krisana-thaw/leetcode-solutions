# Write your MySQL query statement below
SELECT Users.NAME, SUM(amount) as BALANCE
FROM Users
LEFT JOIN Transactions ON Users.account = Transactions.account
GROUP BY Transactions.account
HAVING BALANCE > 10000