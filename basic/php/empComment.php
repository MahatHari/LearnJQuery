<?php
$name=htmlspecialchars($_POST["empname"]);
$comment= htmlspecialchars($_POST["empcomment"]);

echo "Hi $empname. Your comment has been received successfully.". "";
echo "Here's the comment what you've entered: $empcomment";
?>