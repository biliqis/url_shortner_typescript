import mongoose from "mongoose"
import express from "express"
import {Url} from "../types/url.type"
import { urlModel } from "./url.model"
import urlService from "./url.service";
const { nanoid } = require("nanoid");
import{Request, Response} from "express"

class UrlController{
    public allUrl = async(req:Request, res:Response)=>{
        try {
            const {longUrl} =req.body
            const hostname = req.headers.host
            const getResult = await urlService.generateUrl(longUrl, hostname)
            if(!hostname)return res.status(404).json("Invalid Url")
            return res.status(200).json({data: getResult})
        } catch (err:any) {
            console.error(err)
            return res.status(500).json({message:err.message})
            
        }
    }

        public getnewUrl = async(req:Request, res:Response)=>{
            try {
                const myUrl = await urlService.getLongUrl(req.params.urlId, req.ip)
                if(myUrl){
                    return res.redirect(307, myUrl.longUrl)
                }
                return res.status(404).json("No Url found");
            } catch (err:any) {
              console.error(err);
              return res.status(500).send({ message: err.message });
            }
        }

     
public getStatisticUrl = async (req:Request, res:Response) => {
    try {
      const url = await urlService.getUrlStat(req.params.pathWay);
      if (url) {
        return res.status(200).json({ data: url });
      }
      return res.status(404).json("No Url found");
    } catch (err:any) {
      console.error(err);
      return res.status(500).send({ message: err.message });
    }
}
  };


export default new UrlController()