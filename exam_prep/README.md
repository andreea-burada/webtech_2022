## File Guide
`TW_2021.zip` > `2021_subjects`
```
📦exam_prep
 ┣ 📂express
 ┃ ┣ 📂2021_subjects
 ┃ ┃ ┣ 📂feb-02_var-3
 ┃ ┃ ┣ 📂feb-03_var-3
 ┃ ┃ ┣ 📂feb-05_var-0
 ┃ ┃ ┣ 📂feb-09_var-4
 ┃ ┃ ┗ 📂feb-12_var-2
 ┃ ┗ 📂2023_subjects
 ┃   ┣ 📂[A]feb-03_var-2
 ┃   ┗ 📂[B]feb-03_var-3
 ┣ 📂javascript
 ┃ ┣ 📂2021_subjects
 ┃ ┃ ┣ 📂feb-02_var-0
 ┃ ┃ ┣ 📂feb-02_var-1
 ┃ ┃ ┣ 📂feb-03_var-0
 ┃ ┃ ┣ 📂feb-03_var-1
 ┃ ┃ ┣ 📂feb-05_var-0
 ┃ ┃ ┣ 📂feb-05_var-4
 ┃ ┃ ┣ 📂feb-09_var-3
 ┃ ┃ ┣ 📂feb-12_var-3
 ┃ ┃ ┗ 📂feb-12_var-8
 ┃ ┗ 📂2023_subjects
 ┃   ┣ 📂[A]feb-03_var-0
 ┃   ┣ 📂[A]feb-03_var-4
 ┃   ┣ 📂[B]feb-03_var-0
 ┃   ┗ 📂[B]feb-03_var-4
 ┣ 📂react
 ┃ ┣ 📂2021_subjects
 ┃ ┃ ┣ 📂feb-02_var-4
 ┃ ┃ ┣ 📂feb-03_var-4
 ┃ ┃ ┣ 📂feb-05_var-4
 ┃ ┃ ┣ 📂feb-09_var-1
 ┃ ┃ ┗ 📂feb-12_var-2
 ┃ ┗ 📂2023_subjects
 ┃   ┣ 📂A-feb-03_var-1
 ┃   ┣ 📂B-feb-03_var-3
 ┗ 📜README.md
```
## MySQL User Creation
```sql
CREATE USER 'webtech_exam'@'localhost' IDENTIFIED BY '[password]';

GRANT ALL PRIVILEGES ON *.* TO 'webtech_exam'@'localhost' WITH GRANT OPTION;
```