import UserModal from '../model/user.js'

export const getUser = (req, res) => {
    res.send('THIS WORKS');
    try{
        const user = await user.find();

        res.status(200).json(user);

    } catch (error) {
        res.statu(404).json({ message: error.message });
    }
}

export const createUser = (req, res) => {
    res.send('User Created');
    const user = req.body;
    
    const newUser = new User(user);
    try{
         await newUser.save();

        res.status(201).json(newUser);
        
    } catch (error) {
        res.statu(409).json({ message: error.message });
    }
}