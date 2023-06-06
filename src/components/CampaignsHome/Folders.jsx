import React from 'react'
import TreeView from '@mui/lab/TreeView';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import { Box } from '@mui/material';
import { IoMdSearch } from 'react-icons/io';
import folder from 'images/folder.png'
import { Input } from '@mui/joy';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Label from '@mui/icons-material/Source';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
            color: 'var(--tree-view-color)',
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
    ".css-1g86id8-MuiTreeItem-content.Mui-selected:hover": {
        borderRadius: '0px'
    },
    ".css-u4e75s-MuiTreeItem-root .MuiTreeItem-content.Mui-selected": {
        borderRadius: '0px'
    },
    ".css-1gjy3im-MuiTreeItem-root .MuiTreeItem-content .MuiTreeItem-label": {
        marginLeft: '16px'
    }
}));

function StyledTreeItem(props) {
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelInfo,
        labelText,
        ...other
    } = props;

    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                    <Box component={LabelIcon} color="#2788F7" sx={{ mr: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                </Box>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            {...other}
        />
    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
};

const Folders = () => {
    return (
        <Box sx={{ bgcolor: 'white', height: '558px', border: '1px solid rgba(223, 223, 223, 0.41)', borderRadius: '2px', p: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Input sx={{ height: '28px', border: '1px solid rgba(223, 223, 223, 0.41)', borderRadius: '2px', width: '225px' }}
                    placeholder='Search Campaign'
                    endDecorator={<IoMdSearch style={{ color: '#909090', fontSize: '20px' }} />}
                />
                <Box sx={{ p: '5px', height: '38px', width: '38px', border: ' 0.5px solid rgba(223, 223, 223, 0.41)', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <img src={folder} alt="" style={{ height: '20px', width: '20px' }} />
                </Box>
            </Box>
            <TreeView
                aria-label="gmail"
                defaultExpanded={['3']}
                defaultCollapseIcon={<ArrowDropDownIcon />}
                defaultExpandIcon={<ArrowRightIcon />}
                defaultEndIcon={<div style={{ width: 24 }} />}
                sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                <StyledTreeItem nodeId="1" labelText="CAMPAIGNS" labelIcon={Label}>
                    <StyledTreeItem
                        nodeId="10"
                        labelText="Social"
                        labelIcon={Label}
                        labelInfo="90"
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                    />
                </StyledTreeItem>
                <StyledTreeItem nodeId="2" labelText="QUADFOS" labelIcon={Label} >
                    <StyledTreeItem
                        nodeId="27"
                        labelText="Social"
                        labelIcon={Label}
                        labelInfo="90"
                        color="#1a73e8"
                        bgColor="#e8f0fe"
                    />
                </StyledTreeItem>
                <StyledTreeItem nodeId="26" labelText="FutureIK" labelIcon={Label}>
                    <StyledTreeItem
                        nodeId="13"
                        labelText="MIDDLE EAST"
                        labelIcon={Label}
                    >
                        <StyledTreeItem
                            nodeId="14"
                            labelText="UAE"
                            labelIcon={Label}
                        >
                            <StyledTreeItem
                                nodeId="15"
                                labelText="Dubai"
                                labelIcon={Label}
                            >
                                <StyledTreeItem
                                    nodeId="16"
                                    labelText="Quadfos"
                                    labelIcon={Label}
                                >
                                    <StyledTreeItem
                                        nodeId="17"
                                        labelText="Dubai"
                                        labelIcon={Label}
                                    />
                                </StyledTreeItem>
                            </StyledTreeItem>
                        </StyledTreeItem>
                        <StyledTreeItem
                            nodeId="20"
                            labelText="Saudi Arabia"
                            labelIcon={Label}
                        >
                            <StyledTreeItem
                                nodeId="21"
                                labelText="test"
                                labelIcon={Label}
                            />
                        </StyledTreeItem>
                        <StyledTreeItem
                            nodeId="22"
                            labelText="Kuwait"
                            labelIcon={Label}
                        >
                            <StyledTreeItem
                                nodeId="23"
                                labelText="test"
                                labelIcon={Label}
                            />
                        </StyledTreeItem>
                    </StyledTreeItem>
                </StyledTreeItem>
            </TreeView>
        </Box>
    )
}

export default Folders    