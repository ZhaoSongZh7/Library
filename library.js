let myLibrary = []
        const bookShelf = document.querySelector('.books-grid');
        const createBook = document.querySelector('.create-book');
        const titleInput = document.querySelector('#title');
        const authorInput = document.querySelector('#author');
        const pagesInput = document.querySelector('#pages');
        const readAlreadyInput = document.querySelector('#readAlready');
        const booksGrid = document.querySelector('.books-grid');
        let attributeCount = -1;

        function Book(title, author, pages, readBook) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.readBook = readBook;
        }

        function addBookToLibrary() {
            const titleValue = titleInput.value;
            const authorValue = authorInput.value;
            const pagesValue = pagesInput.value;
            let checkBoxChecked = readAlreadyInput.checked;
            if (checkBoxChecked == false) {
                checkBoxChecked = 'no'
            } else if (checkBoxChecked == true) {
                checkBoxChecked = 'yes'
            }
            const newBook = new Book(titleValue, authorValue, pagesValue, checkBoxChecked);
            myLibrary.push(newBook);
            libraryBooks(myLibrary);
        }

        function libraryBooks(array) {
            for (let i = 0; i < array.length; i++) {
                const cardContainer = document.createElement('div');
                const titleDiv = document.createElement('div');
                const authorDiv = document.createElement('div');
                const pagesDiv = document.createElement('div');
                const checkedDiv = document.createElement('div');
                const deleteButton = document.createElement('button');
                const changeReadButton = document.createElement('button');
                cardContainer.style.marginBottom = '20px'
                titleDiv.innerHTML = 'Title: ' + array[i].title;
                authorDiv.innerHTML = 'Author: ' + array[i].author;
                pagesDiv.innerHTML = 'Pages: ' + array[i].pages;
                checkedDiv.innerHTML = 'Read: ' + array[i].readBook;
                deleteButton.innerHTML = 'Delete';
                if (array[i].readBook == 'yes') {
                    changeReadButton.innerHTML = 'Not Read';
                } else if (array[i].readBook == 'no') {
                    changeReadButton.innerHTML = 'Read';
                } 
                cardContainer.appendChild(titleDiv);  
                cardContainer.appendChild(authorDiv);
                cardContainer.appendChild(pagesDiv);
                cardContainer.appendChild(checkedDiv);
                cardContainer.appendChild(deleteButton);
                cardContainer.appendChild(changeReadButton);
                bookShelf.appendChild(cardContainer);
                deleteButton.addEventListener('click', function(e) {
                    i = 0;
                    cardContainer.parentNode.removeChild(cardContainer);
                    array.splice(i, 1);
                })
                changeReadButton.addEventListener('click', function() {
                    i = 0;
                    console.log(array[i].readBook)
                    if (checkedDiv.textContent == 'Read: yes') {
                        array[i].readBook = 'no';
                        checkedDiv.innerHTML = 'Read: ' + array[i].readBook;
                        changeReadButton.innerHTML = 'Read';
                    } else if (checkedDiv.textContent == 'Read: no') {
                        array[i].readBook = 'yes';
                        checkedDiv.innerHTML = 'Read: ' + array[i].readBook;
                        changeReadButton.innerHTML = 'Not Read';
                    }
                })
            }
        } 

        createBook.addEventListener('click', function() {
            booksGrid.innerHTML = '';
            addBookToLibrary();
        })