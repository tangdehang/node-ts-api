import {Request, Response, NextFunction} from "express"
export interface CumtomRequeset extends Request{
    // ts语法 有就声明，没有就不声明
    user?: string
}

export interface CumtomResponse extends Response{

}

export type CumtomRequesetHandler = (req: CumtomRequeset, res: CumtomResponse, next: NextFunction) => any;