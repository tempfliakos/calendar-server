
const express = require('express');
const {Reserves} = require('../models');
const {Op} = require("sequelize");

const router = express.Router();

router
	.get("", async (req, res) => {
		try {
			const dateParam = new Date()//req.params.date.split('=')[1];
			const where = {
				where: {
					"start": {
						[Op.gte]: dateParam,
					}
				}
			}
			const reserves = await Reserves.findAll();
			res.status(200).send(reserves);
		} catch (e) {
			res.status(400).send({
				message: e.message,
			});
		}
	})
	.post("", async (req, res) => {
		try {
			const body = req.body;
			const reserve = await Reserves.create(body);
			res.status(200).send(reserve);
		} catch (e) {
			res.status(400).send({
				message: e.message,
			});
		}
	})
	.put("", async (req, res) => {
		try {
			const body = req.body;
			const reserve = await Reserves.findOne({
				where: {
					id: body.id,
				}
			});
			await reserve.update(body);
			res.status(200).send(reserve);
		} catch (e) {
			res.status(400).send({
				message: e.message,
			});
		}
	})
	.delete("/:id", async (req, res) => {
		try {
			const idParam = req.params.id;
			const reserve = await Reserves.findOne({
				where: {
					id: idParam,
				}
			});
			await reserve.destroy();
			res.status(202).send(reserve);
		} catch (e) {
			res.status(400).send({
				message: e.message,
			});
		}
	});

module.exports = router;
