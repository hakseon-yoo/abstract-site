class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(noticeBoard){
        
        if(this.boards.find((val) => { return noticeBoard.name === val.name})) throw new Error();
        noticeBoard.myBoard = true;
        return this.boards.push(noticeBoard);
    }

    findBoardByName(name){
         return this.boards.find((val, i) => {
            if(val.name === name) return this.boards[i];
        });
    }
}

class Board {
    constructor(name){
        if(name==='' || name===null) throw new Error();
        this.name = name;
        this.myBoard = false;
        this.article = [];
    }

    publish(article){
        if(this.myBoard == false){
            throw Error();
        }

        article.id = `${this.name}-`+Math.random()
        article.createdDate = new Date().toISOString();
        this.article.push(article);
    }

    getAllArticles(){ return this.article; }
}

class Article {
    constructor(article){
        const {subject, content, author} = article

        if(subject==='' || subject===null) throw new Error();
        if(content==='' || content===null) throw new Error();
        if(author==='' || author===null) throw new Error();

        this.subject = subject;
        this.content = content;
        this.author = author;
        this.comment = [];
    }

    reply(comment){
        if(!this.id) throw new Error();

        comment.createdDate = new Date().toISOString();
        this.comment.push(comment);
    }

    getAllComments(){
        return this.comment;
    }

}

class Comment {
    constructor(comment){
        const {content, author} = comment;

        if(content==='' || content===null) throw new Error();
        if(author==='' || author===null) throw new Error();

        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};