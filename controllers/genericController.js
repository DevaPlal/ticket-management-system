


const index = (req,res) => {
    res.render("index", { title: "Ticket Management System" });
};

module.exports = {
    index
};