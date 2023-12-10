#!/bin/bash

# Отримуємо поточну дату
current_date=$(date +"%Y-%m-%d %H:%M:%S")

# Додаємо всі зміни до індексу
git add .

# Комітуємо зміни з коментарем, що містить поточну дату
git commit -m "Changes as of $current_date"

# Пушимо зміни на віддалений репозиторій
git push

