export interface answerOption{
    answerText:string
}

export interface Question{
    questionsText: string,
    answerOptions:answerOption[],
    isCorrect:number,
    comment:string
}

export interface QuestionsSchema{
    questions?:Question[]
}
