import mongoose from "mongoose";
import express from "express";
import { urlModel } from "./url.model";
const { nanoid } = require("nanoid");

class UrlService {
  public generateUrl = async (
    longUrl: string,
    hostname: string | undefined
  ) => {
    const urlPath = nanoid(8);
    const  shortUrl = hostname + "/" + urlPath;
    const newUrl = await urlModel.findOne({ longUrl });
    console.log(newUrl)
    if (newUrl) return newUrl.shortUrl;
    const results = new urlModel({
      urlPath,
      shortUrl,
      longUrl,
      Date: new Date(),
    });
    await results.save();
    return  shortUrl;

  };

  public getLongUrl = async (id: string, ip: string) => {
    try {
      const longUrl = await urlModel.findOne({ urlPath: id });
      if (!longUrl) {
        throw new Error("url not found");
      }
        longUrl.Hits = longUrl.Hits + 1;
        longUrl.lastAccessedOn = new Date();
        longUrl.usersVisited = Array.from(
          new Set([...longUrl.usersVisited, ip])
        );
      
      await longUrl.save();
      return longUrl;
    } catch (error) {
      throw new Error("url not found");
    }
  };

  public getUrlStat = async (id:string)=>{
      try {
         const urlStat = await urlModel.findOne({urlPath:id}) 
         if(urlStat){
             return urlStat
         }
      } catch (error) {
          
      }
  }
}
export default new UrlService();
