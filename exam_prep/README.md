## File Guide
`TW_2021.zip` > `2021_subjects`
```
📦exam_prep
 ┣ 📂express
 ┃ ┗ 📂2021_subjects
 ┃   ┣ 📂feb-02_var-3
 ┃   ┣ 📂feb-03_var-3
 ┃   ┣ 📂feb-05_var-0
 ┃   ┣ 📂feb-09_var-4
 ┃   ┗ 📂feb-12_var-2
 ┣ 📂javascript
 ┃ ┗ 📂2021_subjects
 ┃   ┣ 📂feb-02_var-0
 ┃   ┣ 📂feb-02_var-1
 ┃   ┣ 📂feb-03_var-0
 ┃   ┣ 📂feb-03_var-1
 ┃   ┣ 📂feb-05_var-0
 ┃   ┣ 📂feb-05_var-4
 ┃   ┣ 📂feb-09_var-3
 ┃   ┣ 📂feb-12_var-3
 ┃   ┗ 📂feb-12_var-8
 ┣ 📂react
 ┃ ┗ 📂2021_subjects
 ┃   ┣ 📂feb-02_var-4
 ┃   ┣ 📂feb-03_var-4
 ┃   ┣ 📂feb-05_var-4
 ┃   ┣ 📂feb-09_var-1
 ┃   ┗ 📂feb-12_var-2
 ┗ 📜README.md
```
## MySQL User Creation
```sql
CREATE USER 'webtech_exam'@'localhost' IDENTIFIED BY '[password]';

GRANT ALL PRIVILEGES ON *.* TO 'webtech_exam'@'localhost' WITH GRANT OPTION;
```