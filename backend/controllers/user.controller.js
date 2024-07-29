import User from "../models/user.model.js";
import { compare, hash } from "bcrypt";

export async function login(req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.json({ message: "Incorrect Username or Password", status: false });
        }
        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({ message: "Incorrect Username or Password", status: false });
        }
        delete user.password;
        return res.json({ status: true, user });
    } catch (err) {
        next(err);
    }
}

export async function register(req, res, next) {
    try {
        const { username, email, password } = req.body;
        const usernameCheck = await User.findOne({ username });
        if (usernameCheck) {
            return res.json({ msg: "Username already used", status: false });
        }
        const emailCheck = await User.findOne({ email });
        if (emailCheck) {
            res.json({ msg: "Email already used", status: false });
        }
        const hashedPassword = await hash(password, 10);
        const user = await User.create({
            email: email,
            username: username,
            password: hashedPassword,
        });
        delete user.password;
        return res.json({ status: true, user });
    } catch (e) {
        next(e);
    }
}

export async function getAllUsers(req, res, next) {
    try {
        const user = await User.find({ _id: { $ne: req.params.id } }).select([
            'username',
            'email',
            'avatarImage',
            '_id'
        ]);
        return res.json({ status: true, user });

    } catch {
        next(err);
    }
};


export async function setAvatar(req, res, next) {
    try {
        const userId = req.params.id;
        const avatarImage = req.body.image;
        const userData = await User.findByIdAndUpdate(
            userId,
            {
                isAvatarImageSet: true,
                avatarImage,
            },
            {
                new: true,
            }
        );
        return res.json({
            isSet: userData.isAvatarImageSet,
            image: userData.avatarImage,
        });

    } catch (err) {
        next(err);
    }
}

export async function logOut(req, res, next) {
    try {
        if (!req.params.id) return res.json({ msg: 'User id is required' });
        onlineUSer.delete(req.params.id);
        return res.status(200).send();
    } catch (err) {
        next(err);
    }
}
