import { INestApplication } from "@nestjs/common";
import request from "supertest";
import { generate } from "./name-code-description-generator";
import { validData } from "../utility-interfaces";
export async function  postDepartment(app: INestApplication,payload:validData) {
    return await request(app.getHttpServer())
        .post('/department')
        .send(payload);
}