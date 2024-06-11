import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../Models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const shopController: T = {};
const memberService = new MemberService();

shopController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("home");
  } catch (err) {
    console.log("Error: HomePage", err);
  }
};

shopController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");

    res.render("signup");
  } catch (err) {
    console.log("Error: getSignup", err);
  }
};

shopController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");

    res.render("login");
  } catch (err) {
    console.log("Error: getLogin", err);
  }
};

shopController.processLogin = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processLogin");
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error: processLogin", err);
    res.send(err);
  }
};
shopController.processSignup = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processSignup");
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.SHOP;
    const result = await memberService.processSignup(newMember);

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error: processSignup", err);
    res.send(err);
  }
};

export default shopController;
