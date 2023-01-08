import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

const generateLuckyNumber = (request: FastifyRequest, reply: FastifyReply) => {
  const luckyNumberArray: number[] = [];

  const generateInt = (): number => {
    return Math.floor(Math.random() * (9 - 0 + 1) + 0);
  };
  for (let i = 0; i < 4; i++) {
    luckyNumberArray.push(generateInt());
  }

  reply.status(200).send({ number: luckyNumberArray.join("") });
};

const luckyNumber = (fastify: FastifyInstance, opt: any, done: any) => {
  fastify.get("/lucky-number", generateLuckyNumber);
  done();
};

export default luckyNumber;
