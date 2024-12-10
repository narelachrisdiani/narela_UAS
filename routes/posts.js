const express = require('express')
const router = express.Router()


// untuk import database
const koneksi = require('../config/database')

// import express validator
const {body, validationResult} = require('express-validator')

// view
router.get('/',function(req,res){
    // isi data
    koneksi.query('SELECT * FROM posts ORDER BY id desc',function(err,rows){
        if(err){
            return res.status(500).json({
                status:false,
                message: 'server ga nyambung',
            })
        }else{
            return res.status(200).json({
                status:true,
                message: 'menampilkan data posts',
                data: rows 
        
            })
        }
    })  
})

// INSERT 
router. post('/store',[
    // untuk validasi
    body('nama').notEmpty(),
    body('role').notEmpty(),
    body('description').notEmpty(),
    body('gender').notEmpty(),
    body('image_url').notEmpty(),

], (req,res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors:errors.array()
        })

    }

    // definisi form data
    let formData = {
        nama:req.body.nama,
        role: req.body.role,
        description: req.body.description,
        gender: req.body.gender,
        image_url: req.body.image_url,


    }

    // memasukkan query/data
    koneksi.query('INSERT INTO posts SET ?' , formData, function(err,rows){
        // untuk menampilkan error
        if(err){
            return res.status(500).json({
                status: false,
                message: 'server error',
            })
        }else{
            return res.status(201).json({
                status: true,
                message: 'berhasil masukkan data',
                data: rows[0]
            })

        }

    })





})

//detail data 
router.get('/:id', function(req,res){
    let id = req.params.id

    koneksi.query(`SELECT * FROM posts WHERE ID=${id}`,
        function(error,rows){
            if(error){
                return res.status(500).json({
                    status:false,
                    message: 'server error coyy',
                })
            }

            //kalau post id nya belum ada/tidak ada
            if(rows.length <=0){
                return res.status(404).json({
                    status:false,
                    message: 'data belum ada coy'
                })
            } else{
                return res.status(200).json({
                    status:true,
                    message: 'menampilkan data post berdasarkan id',
                    data: rows[0]
                })
            }
        }

    )
})

//update /edit data
router.patch('/update/:id',[
    body('nama').notEmpty(),
    body('role').notEmpty(),
    body('description').notEmpty(),
    body('gender').notEmpty(),
    body('image_url').notEmpty(),


    
],(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(442).json({
            errors:errors.array()
        })
    }

    let id = req.params.id //untuk mengambil data id

    let formData={
        nama:req.body.nama,
        role: req.body.role,
        description: req.body.description,
        gender: req.body.gender,
        image_url: req.body.image_url,

    }

    //update query
    koneksi.query(`UPDATE posts set ? WHERE id=${id}`, formData,
    function(errors,rows){
        if(errors){
            return res.status(500).json({
                status:false,
                message: 'internal server error'
            })
        }else {
            return res.status(200).json({
                status:true,
                message: 'update berhasil coyy'
            })
        }
    }
)
})

// delete
router.delete('/delete/(:id)',
    function(req,res){
        let id = req.params.id

        koneksi.query(`DELETE FROM posts WHERE id = ${id}`,
            function(error,rows){
                if(error){
                    return res.status(500).json({
                        status: false,
                        message: 'internal server error',
                    })
                }else{
                    return res.status(200).json({
                        status:true,
                        message: 'data telah dihapus yaw',
                    })
                }
            }
        )
    }
)

module.exports = router;


