import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Post = ({title, summary, category, content}) => {
  return (
    // <div>
    //     <h4>{title}</h4>
    //     <span>Category: {category}</span>
    //     <span>Summary: {summary}</span>
    //     <p>{content}</p>
    // </div>
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Category: {category}
            </Typography>
            <Typography variant="body2">
                Summary: {summary}
            </Typography>
            <Typography variant="body2">
                {content.slice(0, 100)}...
            </Typography>
        </CardContent>
  </Card>
  )
}

export default Post