import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../Models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const shopController: T = {};
const memberService = new MemberService();

shopController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home Page");
  } catch (err) {
    console.log("Error: HomePage", err);
  }
};

shopController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");

    res.send("Login Page");
  } catch (err) {
    console.log("Error: getLogin", err);
  }
};

shopController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");

    res.send("Signup Page");
  } catch (err) {
    console.log("Error: getSignup", err);
  }
};
shopController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");

    res.send("DONE!");
  } catch (err) {
    console.log("Error: processLogin", err);
  }
};
shopController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.SHOP;

    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error: processSignup", err);
    res.send(err);
  }
};

export default shopController;
